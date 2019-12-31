import axios from 'axios';

const state = () => ({
  questions: [],
  status: undefined,
  error: null,
  filterTags: []
});

const actions = {
  async fetchQuestions({commit}) {
    commit('requestQuestions');
    try {
      const response = await axios.get('/api/questions');
      const questions = JSON.parse(response.data).questions;
      commit('receiveQuestions', questions);
    } catch(error) {
      const { status } = error.response;
      if (status === 500) {
        commit('setError', 'Internal server error');
      }
    }
  },
  pushFilterTag({commit}, tag) {
    commit('pushFilterTag', tag);
  },
  removeFilterTag({commit}, tag) {
    commit('removeFilterTag', tag);
  }
};

const mutations = {
  requestQuestions: (state) => (state.status = 'fetching'),
  receiveQuestions: (state, questions) => {
    state.status = 'success';
    state.questions = questions;
  },
  setError: (state, message) => {
    state.error = message;
    state.status = 'error';
  },
  pushFilterTag(state, tag) {
    state.filterTags.push(tag);
  },
  removeFilterTag(state, targetTag) {
    state.filterTags = state.filterTags.filter(tag => tag !== targetTag);
  }
};

export default {
  state,
  actions,
  mutations
};