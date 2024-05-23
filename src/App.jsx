import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LeaderboardPage from "./pages/LeaderboardPage";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage2";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import { asyncPreloadProcess } from "./states/isPreloadAction";
import { asyncUnsetAuthUser } from "./states/authUserAction";
import AddThreadPage from "./pages/AddThreadPage";

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Loading />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/new" element={<AddThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
