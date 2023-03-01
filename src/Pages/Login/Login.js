import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../UserContext/UserContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useTitle("Login - Bloodstream");

  // const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //
  useEffect(() => {
    setSuccessMessage(
      JSON.stringify(window.localStorage.getItem("successMessage"))
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("successMessage", successMessage);
  }, [successMessage]);
  //
  const { googleSignIn, signInUser, setUser, user, displayName } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        setUser(user);
        setSuccessMessage(true);
        form.reset();
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(error.message);
        // alert(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn();
    setSuccessMessage(true);
    // navigate(from, { replace: true });
  };
  return (
    <div className="mx-auto my-5">
      {(successMessage && user && (
        <h2 className="text-center" id="success-text">
          Welcome {user.displayName} to bloodstream
        </h2>
      )) || (
        <h2
          className="text-center fw-bold text-success"
          id="login-header"
          data-aos="zoom-in"
        >
          LOGIN TO BLOODSTREAM
        </h2>
      )}
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label className="text-muted fw-bold">
            Email <span className="text-danger">*</span>
          </label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <label className="text-muted fw-bold">
            Password <span className="text-danger">*</span>
          </label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {errorMessage === "Firebase: Error (auth/wrong-password)." && (
          <p
            className="text-danger mt-1 fw-bold error-message"
            data-aos="fade-right"
          >
            Password is wrong
          </p>
        )}

        {errorMessage === "Firebase: Error (auth/user-not-found)." && (
          <p
            className="text-danger mt-1 fw-bold error-message"
            data-aos="fade-right"
          >
            This email is not registered with bloodstream
          </p>
        )}
        {errorMessage === "Firebase: Error (auth/popup-closed-by-user)." && (
          <p
            className="text-danger mt-1 fw-bold error-message"
            data-aos="fade-right"
          >
            Popup closed by user
          </p>
        )}

        <Button variant="success" type="submit" className="fw-bold">
          Login
        </Button>

        <p className="small fw-bold mt-2 pt-1 mb-0">
          <span className="me-1">Don't have an account?</span>
          <Link to="/register" className="link-success">
            Register now
          </Link>
        </p>
      </Form>

      <div id="login-container">
        <div>
          <h6 className="mt-2 fw-bold" id="or-text">
            or
          </h6>

          <Button
            onClick={handleGoogleSignIn}
            type="submit"
            // variant="info"
            className="fw-bold pe-3 text-white"
            id="google-sign-in-btn"
          >
            <img
              src="https://i.ibb.co/6Xx2nTf/google-icon-24.png"
              alt=""
              id="google-icon"
            />{" "}
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
