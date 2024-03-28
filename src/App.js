import logo from "./logo.svg";
import "./App.css";
import NavComp from "./Components/NavComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import CreatePost from "./Components/CreatePost";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import SinglePost from "./Components/SinglePost";
import UpdatePost from "./Components/UpdatePost";

function App() {
  return (
    <Router>
      <NavComp />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/update/:id" element={<UpdatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
