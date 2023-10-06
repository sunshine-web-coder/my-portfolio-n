import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        icon={false}
        toastOptions={{
          duration: 3000,
          success: {
            duration: 3000,
            style: {
              background: "#004225",
              color: "#fff",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#791e06",
              color: "#fff",
            },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
