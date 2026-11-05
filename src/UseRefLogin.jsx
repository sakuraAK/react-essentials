import { useRef, useState } from "react";

function UseRefLogin() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email: " + email.current.value);
    console.log("Password: " + password.current.value);

    event.target.reset();

  }


  return (
    <form onSubmit={handleSubmit} onReset={(event) => event.target.reset()}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default UseRefLogin;
