import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUserReducer";
import isPreloadReducer from "./isPreloadReducer";
import getLeaderboardReducer from "./leaderboardReducer";
import threadDetailReducer from "./threadsDetailReducer";
import threadsReducer from "./threadsReducer";
import usersReducer from "./UserReducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    leaderboard: getLeaderboardReducer,
  },
});

export default store;
