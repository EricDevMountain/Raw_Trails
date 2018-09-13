import axios from "axios";

const LOGOUT = "LOGOUT";

const initialState = {};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.get("/api/logout")
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGOUT":
      return { ...state };
  }
}
