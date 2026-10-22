import { useState } from "react";
import Header from "./components/Header";


function App() {


  const [email, setEmail] = useState('default@po4ti.net');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Email: ' + email);
    console.log('Password: ' + password);
  }

  function handleEmailInputChange(event) {
      setEmail(event.target.value);
  }

  function handlePasswordInputChange(event) {
    setPassword(event.target.value);
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
            <input id="email" type="email"  name="email" value={email} onChange={handleEmailInputChange}/>
          </div>
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password"  name="password" value={password} onChange={handlePasswordInputChange}/>
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