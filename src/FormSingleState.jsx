import { useState } from "react";
import Header from "./components/Header";


function App() {


  const [inputValues, setInpuValues] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(event, inputFieldName) {
    setInpuValues((prevValue) => 
    (
      {
        ...prevValue,
        [inputFieldName]: event.target.value
      }
    )
    );

  }

 
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Email: ' + inputValues.email);
    console.log('Password: ' + inputValues.password);
  }

 

  return (
  <>  
    <Header/>
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email"  name="email" value={inputValues.email} onChange={(event) => handleInputChange(event, "email")}/>
          </div>
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"  name="password" value={inputValues.password} onChange={(event) => handleInputChange(event, "password")}/>
          </div>
        </div>
        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    </main>
  </>);
}

export default App;