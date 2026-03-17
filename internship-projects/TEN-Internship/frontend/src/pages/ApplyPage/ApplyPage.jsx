import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";

function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    higherEducation: "",
    collegeName: "",
    graduateYear: "",
    resume: null,
    resumePreview: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({
        ...formData,
        resume: file,
        resumePreview: URL.createObjectURL(file),
      });
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Apply Now
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            select
            label="Gender"
            name="gender"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            label="Higher Education"
            name="higherEducation"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            label="College Name"
            name="collegeName"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            label="Graduation Year"
            name="graduateYear"
            type="number"
            fullWidth
            required
            margin="normal"
            onChange={handleChange}
          />

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={{ marginTop: "20px" }}
          />

          {formData.resumePreview && (
            <iframe
              src={formData.resumePreview}
              title="Resume Preview"
              width="100%"
              height="300px"
              style={{ marginTop: "20px" }}
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default ApplyPage;
