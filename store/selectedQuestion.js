import axios from 'axios';

const state = () => ({
  question: undefined,
  answers: [],
  sortBy: 'top'
});

const actions = {
  setQuestion({commit}, question, answers) {
    commit('setSelectedQuestion', question, answers);
  },
  toggleSortBy({commit}) {
    commit('sortAnswers');
  }
};

const mutations = {
  setSelectedQuestion(state, payload) {
    const { question, answers} = payload;
    state.question = question;
    state.answers = answers.sort((a, b) => {
      if (state.sortBy === 'top') {
        return b.rank - a.rank;
      }
      return a.rank - b.rank;
    });
  },
  sortAnswers(state) {
    state.sortBy = state.sortBy === 'top' ? 'lowest' : 'top';
    state.answers = state.answers.sort((a, b) => {
      if (state.sortBy === 'top') {
        return b.rank - a.rank;
      }
      return a.rank - b.rank;
    });
  }
};


export default {
  state,
  actions,
  mutations
};