import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
const NavComp = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link className="btn btn-primary" to="/" style={{ fontSize: "22px" }}>
          BLOG APP
        </Link>
        <Nav>
          <Link className="btn btn-primary me-4" to="/">
            Posts
          </Link>
          <button
            className="btn btn-primary me-4"
            onClick={() => {
              {
                localStorage.getItem("token")
                  ? navigate("/create", { replace: true })
                  : alert("User must loggedin to create post");
              }
            }}
          >
            Create Post
          </button>

          {token ? (
            <Link className="btn btn-primary" to="/profile">
              Profile
            </Link>
          ) : (
            <>
              <Link className="btn btn-primary me-4" to="/signin">
                Sign In
              </Link>
              <Link className="btn btn-primary" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComp;
