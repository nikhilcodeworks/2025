import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormHelperText
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import axiosClient from "../../helpers/axiosClient";
import { useAuth } from "../../context/AuthContext";

const UpdatePasswordModal = ({ isOpen, onClose }) => {
  const { role } = useAuth();

  const [previous, setPrevious] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPrev, setShowPrev] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const getPasswordStrength = (password) => {
    if (!password) return "";
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
      toast.error("All fields are required");
      return;
    }
    if (newPass !== confirm) {
      toast.error("New passwords do not match");
      return;
    }

    const endpoint =
      role === "recruiter"
        ? "/recruiter/update/password"
        : "/student/update/password";

    try {
      const response = await axiosClient.post(endpoint, {
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
      setShowPrev(false);
      setShowNew(false);
      setShowConfirm(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const renderPasswordField = (
    label,
    value,
    setValue,
    show,
    setShow,
    showStrength = false
  ) => (
    <>
      <TextField
        label={label}
        type={show ? "text" : "password"}
        fullWidth
        variant="outlined"
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShow((prev) => !prev)} edge="end">
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      {showStrength && value && (
        <Typography variant="caption" sx={{ ml: 1 }}>
          Password Strength: <strong>{getPasswordStrength(value)}</strong>
        </Typography>
      )}
    </>
  );

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
          Change Password
        </Typography>
        {error && <FormHelperText error>{error}</FormHelperText>}
        {renderPasswordField(
          "Previous Password",
          previous,
          setPrevious,
          showPrev,
          setShowPrev
        )}
        {renderPasswordField(
          "New Password",
          newPass,
          setNewPass,
          showNew,
          setShowNew,
          true
        )}
        {renderPasswordField(
          "Confirm New Password",
          confirm,
          setConfirm,
          showConfirm,
          setShowConfirm
        )}

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

export default UpdatePasswordModal;
