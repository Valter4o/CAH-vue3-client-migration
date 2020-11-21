export default {
  namespaced: true,
  actions: {
    fetchRandomCard: ({ dispatch }, { type, deckId }) => {
      return dispatch(
        "fetchItem",
        {
          endpoint: `deck/${type}/${deckId}/1`,
        },
        { root: true }
      );
    },
    fetchRandomCards: ({ dispatch }, { type, deckId, count }) => {
      return dispatch(
        "fetchItem",
        {
          endpoint: `deck/${type}/${deckId}/${count}`,
        },
        { root: true }
      );
    },
    fetchSoloRound: ({ dispatch }, { deckId }) => {
      return dispatch(
        "fetchItems",
        {
          endpoints: [`deck/black/${deckId}/1`, `deck/white/${deckId}/5`,`deck/white/${deckId}/5`],
        },
        { root: true }
      );
    },
  },
};
