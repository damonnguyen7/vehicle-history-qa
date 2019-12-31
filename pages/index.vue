<template>
  <div id="dashboard">
    <div v-if="status === 'success'" id="questions">
      <filter-tag-field></filter-tag-field>
      <div id="filter-tags">
        <filter-tag v-for="filterTag of filterTags" :tag="filterTag"></filter-tag>
      </div>
      <div class="question-container" v-for="question in questions" v-bind:key="question.id">
        <div class="question">
          <nuxt-link class="question-link" :to="`/questions/${question.id}`">{{question.question}}</nuxt-link>
        </div>
        <top-answer :answer="question.topAnswer"></top-answer>
        <div class="tags">
          <div class="tag" v-for="tag of question.tags">{{tag}}</div>
        </div>
        <div class="comment-icon">
          <v-icon>{{ commentIconSVGPath }}</v-icon>
          <p>{{question.answers.length}}</p>
        </div>
      </div>
    </div>
    <error v-else-if="status === 'error'"></error>
  </div>
</template>

<script>
  import TopAnswer from '../components/TopAnswer';
  import FilterTagField from '../components/FilterTagField';
  import FilterTag from '../components/FilterTag';
  import Error from '../components/Error';

  export default {
    components: {
      Error,
      TopAnswer,
      FilterTagField,
      FilterTag
    },
    data: function() {
      return {
        commentIconSVGPath: 'M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z'
      };
    },
    computed: {
      questions() {
        const questions = this.$store.state.questions.questions.map((questionItem) => {
          const { id, question, answers, tags } = questionItem;
          let highestRankAnswer = answers.reduce((topAnswer, nextAnswer) => {
            return nextAnswer.rank > topAnswer.rank ? nextAnswer : topAnswer;
          });
          return { ...questionItem, topAnswer: highestRankAnswer.answer };
        });
        const filterTags = this.$store.state.questions.filterTags;
        if (filterTags.length > 0) {
          return questions.filter((question) => {
            const { tags } = question;
            for (let tag of tags) {
              if (filterTags.includes(tag)) {
                return true;
              }
            }
            return false;
          });
        }

        return questions;
      },
      filterTags() {
        return this.$store.state.questions.filterTags;
      },
      status() {
        return this.$store.state.questions.status;
      }
    },
    created() {
      this.$store.dispatch('questions/fetchQuestions');
    }
  }
</script>

<style scoped>
  #dashboard {
    display: flex;
    justify-content: center;
  }
  #questions {
    width: 600px;
  }
  .question-container {
    background-color: #FFFFFF;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #efefef;
    border-radius: 3px;
  }
  .question {
    margin-bottom: 8px;
  }
  .question-link {
    font-size: 18px;
    text-decoration: unset;
    color: #333;
    font-weight: 700;
  }
  .question-link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .question p {
    font-size: 12px;
    font-weight: 400;
    position: relative;
    top: 2.5px;
  }
  .comment-icon {
    display: flex;
    width: fit-content;
    position: relative;
    top: 4px;
    font-size: 13px;
  }
  .comment-icon p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4px;
    position: relative;
    top: -3px;
  }
  #filter-tags, .tags {
    display: flex;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .tag {
    margin-right: 4px;
    background-color: #227093;
    padding: 2px 6px;
    font-size: 12px;
    border-radius: 4px;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 600px) {
    #questions {
      width: 100%;
      padding: 0px 12px;
    }
  }
</style>