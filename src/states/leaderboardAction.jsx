import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../utils/api";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARDS",
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboard,
    },
  };
}

function asyncReceiveLeaderboardActionCreator() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboard = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardActionCreator, asyncReceiveLeaderboardActionCreator };
