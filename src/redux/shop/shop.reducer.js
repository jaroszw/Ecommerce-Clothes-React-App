import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFeching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_STAR: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    }
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};

export default shopReducer;
