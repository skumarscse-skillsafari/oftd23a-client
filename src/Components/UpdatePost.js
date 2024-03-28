import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import FileBase64 from "react-file-base64";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/baseURL";
const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/posts/${id}`)
      .then((res) => setPost(res.data.data))
      .catch((error) => alert(error.response.data.message));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios
      .put(`${BASE_URL}/api/v1/posts/${id}`, post, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/", { replace: true });
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="container">
      <h2 className="text-center display-3">Update Post</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter post description"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Upload Image</Form.Label>
          <div className="form-control">
            <FileBase64
              type="file"
              onDone={({ base64 }) =>
                setPost((prev) => {
                  return {
                    ...prev,
                    image: base64,
                  };
                })
              }
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Tags (Seperated by comma)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags"
            name="tags"
            value={post.tags}
            onChange={handleChange}
          />
        </Form.Group>
        <Button key="primary" variant="primary" onClick={handleSubmit}>
          Update Post
        </Button>
        {"  "}
        <Button key="secondary" variant="secondary">
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default UpdatePost;
