import PostContextProvider from "./contexts/PostContextProvider";
import Navbar from "./components/layouts/Navbar";
import HomePosts from "./components/home/posts";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePostsPost from "./components/home/posts/Post";

const toastConfig = {
  position: toast.POSITION.TOP_CENTER,
  pauseOnHover: true,
  autoClose: 1000,
};

function App() {
  return (
    <Router>
      <div>
        <div className="bg-white text-gray-800">
          <div className="container bg-gray-50">
            <PostContextProvider>
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <div className="p-4">
                    <h1 className="font-bold text-2xl">
                      Hi, you are in home page, you can use the links in navbar
                      for navigating to the other pages.
                    </h1>
                  </div>
                </Route>
                <Route path="/posts" exact>
                  <div className="p-4">
                    <HomePosts />
                  </div>
                </Route>
                <Route path="/post/:postId" exact>
                  <div className="p-4">
                    <HomePostsPost />
                  </div>
                </Route>
              </Switch>
            </PostContextProvider>
          </div>
        </div>
        <ToastContainer {...toastConfig} />
      </div>
    </Router>
  );
}

export default App;
