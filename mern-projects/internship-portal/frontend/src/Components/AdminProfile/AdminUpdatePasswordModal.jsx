import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axiosClient from "../../helpers/axiosClient";

const AdminUpdatePasswordModal = ({ isOpen, onClose }) => {
  const [previous, setPrevious] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
        password
      )
    ) {
      return "Strong";
    }
    return "Medium";
  };

  const handleSubmit = async () => {
    if (!previous || !newPass || !confirm) {
      setError("All fields are required");
      return;
    }
    if (newPass !== confirm) {
      setError("New passwords do not match");
      return;
    }
    setError("");

    try {
      const response = await axiosClient.post("/admin/update/password", {
        existingPassword: previous,
        newPassword: newPass,
      });

      if (response.data.success) {
        alert("Password updated successfully!");
        setPrevious("");
        setNewPass("");
        setConfirm("");
        onClose();
      } else {
        setError(response.data.message || "Failed to update password!");
      }
      setShowPrevious(false);
      setShowNewPass(false);
    } catch (error) {
      console.error("Error updating password: ", error);
      setError(error.message);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 4,
          width: 400,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Update Password
        </Typography>

        {error && <FormHelperText error>{error}</FormHelperText>}

        <TextField
          label="Previous Password"
          type={showPrevious ? "text" : "password"}
          fullWidth
          variant="outlined"
          margin="normal"
          value={previous}
          onChange={(e) => setPrevious(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPrevious(!showPrevious)}>
                {showPrevious ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <TextField
          label="New Password"
          type={showNewPass ? "text" : "password"}
          fullWidth
          variant="outlined"
          margin="normal"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          helperText={newPass && `Strength: ${getPasswordStrength(newPass)}`}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowNewPass(!showNewPass)}>
                {showNewPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <TextField
          label="Confirm New Password"
          type={showNewPass ? "text" : "password"}
          fullWidth
          variant="outlined"
          margin="normal"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowNewPass(!showNewPass)}>
                {showNewPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button onClick={onClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdminUpdatePasswordModal;
