<template>
  <div id="question-detail" v-if="question">
    <div class="qd-container">
      <div class="qd-question">{{question}}</div>
      <div class="qd-answers">
        <div class="qd-answer" v-for="answer in answers" v-bind:key="answer.id">
          <p>{{answer.answer}}</p>
          <div class="rank-icon">
            <v-icon :class="`rank-${answer.rank}-icon`">{{ rankIconSvgPath }}</v-icon>
            <p>{{answer.rank}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sort-by-rank" v-on:click="toggleRank">
      <div v-if="sortBy === 'top'">
        <v-icon>{{ topRankIconSvgPath }}</v-icon>
      </div>
      <div v-else-if="sortBy === 'lowest'">
        <v-icon>{{ lowestRankIconSvgPath }}</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        topRankIconSvgPath: 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z',
        lowestRankIconSvgPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
        rankIconSvgPath: 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'    
      };
    },
    computed: {
      question() {
        return this.$store.state.selectedQuestion.question;
      },
      answers() {
        return this.$store.state.selectedQuestion.answers;
      },
      sortBy() {
        return this.$store.state.selectedQuestion.sortBy;
      }
    },
    methods: {
      toggleRank() {
        this.$store.dispatch('selectedQuestion/toggleSortBy');
      },
      fetchQuestions(questionId) {
        let question = this.$store.state.questions.questions.find(question => question.id === questionId);
        let answers = question.answers;
        this.$store.dispatch('selectedQuestion/setQuestion', {
          question: question.question,
          answers
        });
      }
    },
    created(a) {
      const questionId = Number(this.$router.currentRoute.params.questionId);  
      const hasQuestions = this.$store.state.questions.questions.length > 0;
      if (!hasQuestions) {
        this.$store.dispatch('questions/fetchQuestions');
        setTimeout(() => {
          this.fetchQuestions(questionId);
        }, 250);
      } else {
        this.fetchQuestions(questionId);
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.questionId);
    }
  }
</script>

<style scoped>
  #question-detail {
    width: 600px;
    margin: 12px auto;
    display: flex;
    margin-top: 58px;
  }
  .qd-container {
    width: 600px;
  }
  .qd-question {
    font-size: 18px;
    text-decoration: unset;
    color: #333;
    font-weight: 700;
    background-color: #FFFFFF;
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #efefef;
    margin-bottom: 16px;
  }
  .qd-answer {
    background-color: #FFFFFF;
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #efefef;
    margin-bottom: 16px;
  }
  .rank-icon {
    display: flex;
    width: fit-content;
    margin-top: 8px;
  }
  .rank-icon p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4px;
  }
  .rank-icon {
    color: #666;
    font-size: 13px;
  }
  .sort-by-rank {
    height: fit-content;
    background-color: #FFFFFF;
    border: 1px solid #efefef;
    position: relative;
    left: 4px;
    border-radius: 3px;
  }
  .sort-by-rank:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    #question-detail {
      width: 100%;
      padding: 0px 12px;
    }
  }
</style>