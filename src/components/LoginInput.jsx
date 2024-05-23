import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form>
      <div className="mt-2 flex flex-col">
        <label htmlFor="email" className="font-bold">Email</label>
        <input
          className="rounded-md border-2 border-solid border-black p-2"
          type="email"
          id="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="mt-2 flex flex-col">
        <label htmlFor="email" className="font-bold">Kata Sandi</label>
        <input
          className="rounded-md border-2 border-solid border-black p-2"
          type="password"
          placeholder="Masukkan Kata Sandi"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button type="button" className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white+" onClick={() => login({ email, password })}>
        Masuk
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
