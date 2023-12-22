import SideBar from "./components/SideBar";
import Notification from "./components/Notification/Notification";
import { Outlet } from "react-router-dom";
import SwapFace from "./pages/SwapFace/SwapFace";

function App() {
  return (
    <>
      <div className="h-screen bg-app">
        <div className="flex h-full gap-10 px-5 py-5">
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="w-full app-content">
            <Outlet />

          </div>
          <Notification />

        </div>
      </div>
    </>
  );
}

export default App;
