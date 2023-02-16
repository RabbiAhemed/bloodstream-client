import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
const Login = () => {
  // const [error, setError] = useState("");
  const { googleSignIn, signInUser, setUser } = useContext(AuthContext);
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
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error.message));
  };
  const handleGoogleSignIn = () => {
    googleSignIn();
    navigate(from, { replace: true });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>

      <Form onSubmit={handleSubmit}>
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
        <Button variant="success" type="submit" className="fw-bold">
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
          onClick={handleGoogleSignIn}
          type="submit"
          variant="warning"
          className="fw-bold p-2 text-white"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
