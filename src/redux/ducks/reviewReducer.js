import axios from "axios";

//ACTION TYPE
const GET_REVIEWS = "GET_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_REVIEW = "UPDATE_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

//INITIAL STATE
const initialState = {
  reviews: [],
  error: null,
  loading: false
};

//ACTION CREATORS
export const getReviews = () => {
  return {
    type: GET_REVIEWS,
    payload: axios.get("/api/reviews")
  };
};

export const addReview = text => {
  return {
    type: ADD_REVIEW,
    payload: axios.post("/api/review", { text })
  };
};

export const updateReview = (reviewid, text) => {
  return {
    type: UPDATE_REVIEW,
    payload: axios.put(`/api/review/${reviewid}`, { text })
  };
};

export const deleteReview = reviewid => {
  return {
    type: DELETE_REVIEW,
    payload: axios.delete(`/api/review/${reviewid}`)
  };
};

//REDUCER

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_REVIEWS}_PENDING`:
      return { ...state, loading: true, error: null };
    case `${GET_REVIEWS}_FULFILLED`:
      return {
        ...state,
        reviews: action.payload.data,
        loading: false,
        error: null
      };
    case `${GET_REVIEWS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case `${ADD_REVIEW}_PENDING`:
      return { ...state, loading: true, error: null };
    case `${ADD_REVIEW}_FULFILLED`:
      return {
        ...state,
        reviews: action.payload.data,
        loading: false,
        error: null
      };
    case `${ADD_REVIEW}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case `${UPDATE_REVIEW}_PENDING`:
      return { ...state, loading: true, error: null };
    case `${UPDATE_REVIEW}_FULFILLED`:
      return {
        ...state,
        reviews: action.payload.data,
        loading: false,
        error: null
      };
    case `${UPDATE_REVIEW}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case `${DELETE_REVIEW}_PENDING`:
      return { ...state, loading: true, error: null };
    case `${DELETE_REVIEW}_FULFILLED`:
      return {
        ...state,
        reviews: action.payload.data,
        loading: false,
        error: null
      };
    case `${DELETE_REVIEW}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
