import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { signUp,login } from '../../firebase';

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault
    if (signState === "sign In") {
      await login(email, password);

    }
    else {
      await signUp(name,email,password)
    }
  }

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("signUp");
                }}
              >
                Sign Up Now!
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("signIn");
                }}
              >
                Sign In Now!
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login