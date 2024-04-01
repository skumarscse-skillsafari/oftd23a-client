import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../api/baseURL";
const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      .post(`${BASE_URL}/users/signin`, user)
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
        // window.location.reload()
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="container">
      <h2 className="text-center display-3">Sign In</h2>
      <Form>
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
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!user.email || !user.password}
        >
          Login
        </Button>{" "}
        <Button variant="secondary">Cancel</Button>{" "}
      </Form>
    </div>
  );
};

export default Signin;
