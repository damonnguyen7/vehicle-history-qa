<template>
  <nav>
    <div id="filter-tag-field">
      <div class="search-icon">
        <v-icon>{{ searchIconSVGPath }}</v-icon>
      </div>
      <form v-on:submit.prevent="addFilterTag">
        <input 
          class="filter-tag-field-input" 
          type="text" 
          name="filter" 
          placeholder="Add Filter Tag" 
          autocomplete="off"
          v-on:change="handleChange"
          :value="inputValue"
          />
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    data: function() {
      return {
        inputValue: '',
        searchIconSVGPath: 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z',
      };
    },
    methods: {
      handleChange(e) {
        let inputValue = e.target.value;
        this.inputValue = inputValue;
      },
      clearField(e) {
        this.inputValue = '';
      },
      addFilterTag(e) {
        let tag = this.inputValue;
        this.$store.dispatch('questions/pushFilterTag', tag);
        this.clearField(e);
      }
    }
  }
</script>

<style scoped>
  #filter-tag-field {
    display: flex;
    width: 100%;
    margin-top: 12px;
    background-color: #FFFFFF;
    border: 1px solid #efefef;
    border-radius: 3px;
    margin-bottom: 8px;
  }
  .navbar form {
    width: inherit;
  }
  .navbar-input {
    width: 100%;
    font-size: 15px;
    padding: 6px 12px;
    padding-left: unset;
  }
  .search-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 4px;
  }
</style>