import { useState } from "react";
import Header from "./components/Header";


function App() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 
  function handleSubmitEvent(event) {
    event.preventDefault();
    console.log('Email: ' + email);
    console.log(`Password: ${password}`);
  }


  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }
  
  return (
  <>  
     <Header/>
    <main>
      <form onSubmit={handleSubmitEvent}>
        <h2>Login</h2>
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={onEmailChangeHandler} name="email" value={email}/>
          </div>
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={onPasswordChangeHandler} name="password" value={password}/>
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