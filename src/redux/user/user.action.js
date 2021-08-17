import { SET_CURRENT_USER } from "../contstants";
export const setCurrentUser = (userinfo) => ({
  type: SET_CURRENT_USER,
  payload: userinfo,
});
