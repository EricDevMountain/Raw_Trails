import axios from "axios";

const SET_QUIZ_ONE_ANSWER = "SET_QUIZ_ONE_ANSWER";
const SET_QUIZ_TWO_ANSWER = "SET_QUIZ_TWO_ANSWER";
const SET_QUIZ_THREE_ANSWER = "SET_QUIZ_THREE_ANSWER";
const POST_ANSWERS = "POST_ANSWERS";
const GET_TRIPS = "GET_TRIPS";

const initialState = {
  answerOne: "",
  answerTwo: "",
  answerThree: "",
  trips: [],
  error: null,
  loading: false
};

export function setQuizOneAnswer(str) {
  return {
    type: SET_QUIZ_ONE_ANSWER,
    payload: str
  };
}

export function setQuizTwoAnswer(str) {
  return {
    type: SET_QUIZ_TWO_ANSWER,
    payload: str
  };
}

export function setQuizThreeAnswer(str) {
  return {
    type: SET_QUIZ_THREE_ANSWER,
    payload: str
  };
}

export const postAnswersToBackend = (userId, answersObj) => {
  return {
    type: POST_ANSWERS,
    payload: axios.post(`/api/answers/${userId}`, answersObj)
  };
};

export function getTrips() {
  return {
    type: GET_TRIPS,
    payload: axios.get("/api/trips")
  };
}

export default function reducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case SET_QUIZ_ONE_ANSWER:
      return { ...state, answerOne: action.payload };

    case SET_QUIZ_TWO_ANSWER:
      return { ...state, answerTwo: action.payload };

    case SET_QUIZ_THREE_ANSWER:
      return { ...state, answerThree: action.payload };

    case `${POST_ANSWERS}_PENDING`:
      return { ...state, loading: true, error: null };

    case `${POST_ANSWERS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        error: null
      };

    case `${POST_ANSWERS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
