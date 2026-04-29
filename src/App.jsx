import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./Components/Auth/Register.jsx";
import ViewItem from "./Components/Menu/ViewItem.jsx";
import Login from "./Components/Auth/Login.jsx";
import DashBoard from "./Components/Admin/DashBoard/DashBoard.jsx";
import MenuManage from "./Components/Admin/DashBoard/MenuManage.jsx";
import MessageManage from "./Components/Admin/DashBoard/MessagesManage.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
function App() {
  return (
    <>  
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/MenuManage" element={<MenuManage />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/view-details" element={<ViewItem />} />
        <Route path="/messages" element={<ContactUs />} />
    <Route path="/admin/messages" element={<MessageManage/>}/>
      </Routes>
    </>
  );
}

export default App;
