import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
//import Chatbot from "./components/Chatbot";import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <AppRoutes />
    </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
