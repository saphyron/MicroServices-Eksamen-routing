import { useState } from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import "./login.css"

function Login(props) {
  const history = useHistory()
  const [success, setSuccess] = useState(false)
  const handleSignup = () => {
      history.push("/signup")
  }
  const handleLogin = () => {
    setSuccess(true)
  }
  if (success) {
    return (<Redirect to="/" />)
  }
    return (
        <div className="MainLogin">
          <header className="App-header">
            <div className="Username">
              <label>Username:</label><input placeholder="Username" />
            </div>
            <div className="Password">
              <label>Password:</label><input placeholder="Password" />
            </div>
            <div className="buttons">
              <div><button className="login" onClick={handleLogin}>Login</button></div>
              <div><button className="signup" onClick={handleSignup}>Signup</button></div>
            </div>
          </header>
        </div>
      );
}
export default Login;