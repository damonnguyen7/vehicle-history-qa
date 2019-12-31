<template>
  <div class="filter-tag" 
    v-on:mouseover="handleMouseover" 
    v-on:mouseout="handleMouseout"
    v-on:click="handleClick(tag)"
  >
    <p v-if="!isHovering">{{tag}}</p>
    <p v-else>x {{tag}}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        isHovering: false
      };
    },
    props: ['tag'],
    methods: {
      handleMouseover() {
        this.isHovering = true;
      },
      handleMouseout() {
        this.isHovering = false;
      },
      handleClick(tag) {
        this.$store.dispatch('questions/removeFilterTag', tag);
      }
    }
  }
</script>

<style>
  .filter-tag {
    display: flex;
    margin-right: 4px;
    border: 1px solid #efefef;
    background-color: #227093;
    color: #FFFFFF;
    padding: 4px;
    border-radius: 3px;
  }
  .filter-tag:hover {
    background-color: #b33939;
    cursor: pointer;
  }
  .filter-tag p {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 4px;
  }
</style>