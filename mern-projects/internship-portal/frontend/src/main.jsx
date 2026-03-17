import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UpdateProvider } from "./context/ProfilePictureUpdateContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="160772782085-2ge6gpipu66oqhpmuo3j1o5e6o3001re.apps.googleusercontent.com">
      <HelmetProvider>
        <AuthProvider>
          <UpdateProvider>
            <App />
          </UpdateProvider>
        </AuthProvider>
      </HelmetProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
