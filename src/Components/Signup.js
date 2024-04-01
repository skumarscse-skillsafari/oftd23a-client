import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api/baseURL";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${BASE_URL}/users/signup`, user)
      .then((res) => alert(res.data.message))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <h2 className="text-center display-3">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password again"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={
            !user.username ||
            !user.email ||
            !user.password ||
            !user.confirmPassword
          }
        >
          Register
        </Button>{" "}
        <Button variant="secondary">Cancel</Button>{" "}
      </Form>
    </div>
  );
};

export default Signup;
