import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account?
          <Link to="/register" className="link-success">
            Register now
          </Link>
        </p>
      </Form>

      <div>
        <h6 className="mt-2">or</h6>

        <Button
          //   onClick={handleGoogleSignIn}
          type="submit"
          variant="warning"
          className="fw-bold p-3"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
