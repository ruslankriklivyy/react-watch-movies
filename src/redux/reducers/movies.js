const initialState = {
  items: [],
};

const SET_MOVIES = 'SET_MOVIES';

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
