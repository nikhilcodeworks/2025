// src/context/UpdateContext.js
import { createContext, useContext, useState } from "react";

// Create context
const UpdateContext = createContext();

// Provider component
export const UpdateProvider = ({ children }) => {
  const [isRecruiterImageUpdated, setIsRecruiterImageUpdated] = useState(false);

  return (
    <UpdateContext.Provider value={{ isRecruiterImageUpdated, setIsRecruiterImageUpdated }}>
      {children}
    </UpdateContext.Provider>
  );
};

// Custom hook for easier usage
export const useUpdate = () => useContext(UpdateContext);
