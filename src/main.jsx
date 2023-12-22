import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import Home from "./pages/Home/Home.jsx";
import Template from "./pages/Template/Template.jsx";
import SwapFace from "./pages/SwapFace/SwapFace.jsx";
import SwapVideo from "./pages/SwapVideo/SwapVideo.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Test from "./pages/Test/Test.jsx";

import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "./index.css";
import PrivateRoute from "./routes/PrivateRoute.jsx";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            {/* Route home and others */}
            <Route path="/" element={<App />}>
              {/* <Route element={<PrivateRoute />}> */}
              <Route index element={<Home />} />
              <Route path="template" element={<Template />} />
              <Route path="/swap-face" element={<SwapFace />} />
              <Route path="/swap-video" element={<SwapVideo />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<Test />} />

              {/* </Route> */}
            </Route>




            {/* Route sign in */}
            <Route path="/signin" element={<SignIn />} />

            {/* Route sign up */}
            <Route path="/signup" element={<SignUp />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Route not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
      </React.Fragment>
    </PersistGate>
  </Provider>
);
