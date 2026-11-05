import { useState } from "react";
import { isValidEmail, isStrongPassword } from "./utils";

function SingleStateLogin() {


  const [inputValuesUpdated, setInpuValuesUpdated] = useState({email: false, password: false});

  const [inputValues, setInpuValues] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event, inputFieldName) {
    setInpuValues((prevValue) => ({
      ...prevValue,
      [inputFieldName]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email: " + inputValues.email);
    console.log("Password: " + inputValues.password);

    if (emailInvalid || passwordIsInvalid) {
      return;
    }

    console.log('Sending data to the server...');
  }

  const emailInvalid = !isValidEmail(inputValues.email);
  const passwordIsInvalid = !isStrongPassword(inputValues.password);

  function handleOnBlur(inputFieldName) {
    setInpuValuesUpdated((prevValue) => (
      {
        ...prevValue,
        [inputFieldName]: true
      }
    ));
  }

  return (
    <form onSubmit={handleSubmit} onReset={() => setInpuValues({email:'', password:''})}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            required
            name="email"
            value={inputValues.email}
            onChange={(event) => handleInputChange(event, "email")}
            onBlur={() => handleOnBlur("email")}
          />
          {emailInvalid && inputValuesUpdated.email ? <div className="control-error">Email is incorrect</div> : <></>}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={inputValues.password}
            onChange={(event) => handleInputChange(event, "password")}
            onBlur={() => handleOnBlur("password")}
          />
            {passwordIsInvalid && inputValuesUpdated.password ? <div className="control-error">Not a strong password</div> : <></>}
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default SingleStateLogin;
