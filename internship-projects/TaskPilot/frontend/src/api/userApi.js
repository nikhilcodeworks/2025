import axios from "axios";

export const getUserProfile = async()=>{
    try{
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/v1/user/me', {withCredentials: true});
        if(!response.data.success){
            throw new Error(response.data.error || "Failed to fetch user profile");
        } 
        return response.data;
    }
    catch(error){
        console.error("Error fetching user profile:", error);
        return;
    }
}

export const updateUserProfile = async (profileData) => {
    try{
        const response = await axios.put(import.meta.env.VITE_BACKEND_URL + '/api/v1/user/me', profileData, {withCredentials: true});
        if(!response.data.success){
            throw new Error(response.data.error || "Failed to update user profile");
        }
        return response.data;
    }
    catch(error){
        console.error("Error updating user profile:", error);
        return;
    }
}

export const roleRequest = async (role) => {
    try {
        const response = await axios.post(
            import.meta.env.VITE_BACKEND_URL + '/api/v1/roles/requests',
            { requested_role: role }, // ✅ match backend
            { withCredentials: true }
        );
        if (!response.data.success) {
            throw new Error(response.data.error || "Failed to request role change");
        }
        return response.data;
    } catch (error) {
        console.error("Error requesting role change:", error);
        return;
    }
};

export const getProjectTaskTeams = async () => {
    try {
        const response = await axios.get(
            import.meta.env.VITE_BACKEND_URL + '/api/v1/user/project-teams-tasks',
            { withCredentials: true }
        );
        if (!response.data.success) {
            throw new Error(response.data.error || "Failed to fetch project/team/task stats");
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching project/team/task stats:", error);
        return;
    }
};