import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUserAction";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="m-auto flex h-screen flex-col">
      <div className="mx-4 my-32 flex w-full items-center rounded-xl bg-white p-7 shadow-lg">
        <div className="w-full">
          <div className="text-center text-2xl font-bold">
            <h2>Masuk</h2>
          </div>
          <div>
            <LoginInput login={onLogin} />
            <p>
              Belum punya akun?
              <Link className="text-blue-500 hover:underline" to="/register">
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
