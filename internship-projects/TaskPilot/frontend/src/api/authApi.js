import axios from "axios";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/v1/auth/login', {
            email,
            password
        }, { withCredentials: true });

        if (!response.data.success) {
            throw new Error(response.data.error || "Login failed");
        }

        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        return;
    }
}

export const registerUser = async ({firstName, lastName, email, password}) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/v1/auth/register', {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        }, { withCredentials: true });

        if (!response.data.success) {
            throw new Error(response.data.error || "Registration failed");
        }

        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        return;
    }
};