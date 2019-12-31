<template>
  <div class="top-answer">
    <p v-if="truncated">{{ answer | truncate(196) }} <a class="read-more" v-if="answer.length > 196" v-on:click="toggleTruncate">(more)</a></p>
    <p v-else>{{ answer }}</p>
  </div>
</template>

<script>
  export default {
    props: ['answer'],
    data: function() {
      return {
        truncated: true
      }
    },
    methods: {
      toggleTruncate() {
        this.truncated = !this.truncated;
      }
    },
    filters: {
      truncate(text, stop, clamp) {
        return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
      }
    },
  }
</script>

<style scoped>
  .top-answer {
    margin-bottom: 4px;
  }
  .read-more {
    color: #2b6dad;
    font-size: 15px;
  }
  .read-more:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>