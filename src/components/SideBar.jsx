import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SidebarLink from "./SidebarLink";
import HomeIcon from "../assets/HomeIcon.svg";
import MenuIcon from "../assets/MenuIcon.svg";
import GalleryIcon from "../assets/GalleryIcon.svg";
import VideoIcon from "../assets/VideoIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import LogOutIcon from "../assets/LogOutIcon.svg";
import HomeIconActive from "../assets/HomeIconActive.svg";
import MenuIconActive from "../assets/MenuIconActive.svg";
import GalleryIconActive from "../assets/GalleryIconActive.svg";
import VideoIconActive from "../assets/VideoIconActive.svg";
import ProfileIconActive from "../assets/ProfileIconActive.svg";
import LogOutIconActive from "../assets/LogOutIconActive.svg";

function SideBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const [isLogOutHovered, setIsLogOutHovered] = useState(false);

  function handleLogOut() {
    navigate("/signin");
  }

  const test = () => {
    navigate("/test")
  }

  return (
    <>
      <div className="flex flex-col justify-between h-full bg-white rounded-xl">
        <div className="flex flex-col m-5">
          <SidebarLink
            to="/"
            activeIcon={HomeIconActive}
            defaultIcon={HomeIcon}
            label="Home"
            isActive={currentPath === "/"}
          />
          <SidebarLink
            to="/template"
            activeIcon={MenuIconActive}
            defaultIcon={MenuIcon}
            label="Template"
            isActive={currentPath === "/template"}
          />
          <SidebarLink
            to="/swap-face"
            activeIcon={GalleryIconActive}
            defaultIcon={GalleryIcon}
            label="Swap Face"
            isActive={currentPath === "/swap-face"}
          />
          <SidebarLink
            to="/swap-video"
            activeIcon={VideoIconActive}
            defaultIcon={VideoIcon}
            label="Swap Video"
            isActive={currentPath === "/swap-video"}
          />
          <div onClick={test}>
            <SidebarLink
              to="test"
              activeIcon={VideoIconActive}
              defaultIcon={VideoIcon}
              label="Test"
              isActive={currentPath === "test"}
            />
          </div>


        </div>
        <div className="flex flex-col m-5">
          <SidebarLink
            to="/profile"
            activeIcon={ProfileIconActive}
            defaultIcon={ProfileIcon}
            label="Profile"
            isActive={currentPath === "/profile"}
          />

          <div
            className={`flex flex-col mt-4 pl-4 pr-11 py-2.5 rounded-lg whitespace-nowrap cursor-pointer ${isLogOutHovered
              ? "bg-red-400 text-rose-100"
              : "text-red-400 bg-white"
              }`}
            onMouseEnter={() => setIsLogOutHovered(true)}
            onMouseLeave={() => setIsLogOutHovered(false)}
            onClick={handleLogOut}
          >
            <div className="flex justify-between gap-2">
              <img
                loading="lazy"
                src={isLogOutHovered ? LogOutIconActive : LogOutIcon}
              />
              <div className="font-semibold grow">Log out</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
