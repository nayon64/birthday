import Audio from "../../pages/Audio/Audio";
import ConfirmdName from "../../pages/ConfirmdName/ConfirmdName";
import CreateName from "../../pages/CreateName/CreateName";
import False from "../../pages/False/False";
import User from "../../pages/User/User";
import Video from "../../pages/Video/Video";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/confirmdname",
    element: <ConfirmdName></ConfirmdName>,
  },
  {
    path: "/flase",
    element: <False></False>,
  },
  {
    path: "/createname",
    element: <CreateName></CreateName>
  },
  {
    path: "/user",
    element: <User></User>
  },
  {
    path: "/music",
    element: <Audio></Audio>
  },
  {
    path: "/video",
    element: <Video></Video>
  },
]);
export default router;