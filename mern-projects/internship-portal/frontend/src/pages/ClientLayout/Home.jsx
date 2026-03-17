import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import NavBar from "../pages/NavMenu/NavBar"

function LandingPage() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch companies hiring (Replace with actual API call)
    setCompanies([
      {
        name: "TechCorp",
        industry: "IT",
        location: "Remote",
        description:
          "TechCorp is looking for a passionate intern to join their development team.",
        applyLink: "#",
      },
      {
        name: "HealthPlus",
        industry: "Healthcare",
        location: "Hybrid",
        description:
          "HealthPlus offers a great opportunity to work in the healthcare sector.",
        applyLink: "#",
      },
      {
        name: "FinBank",
        industry: "Finance",
        location: "On-site",
        description: "FinBank is hiring finance interns for various projects.",
        applyLink: "#",
      },
    ]);
  }, []);

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (searchTerm.trim())
      navigate(`/SearchPage?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Box textAlign="center" py={5}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Start Your Internship Journey
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Sign up to explore and apply for internships that match your skills.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="signup">
            Get Started
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 4, textAlign: "center", mb: 5 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Looking to Hire Interns?
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Post internship opportunities and find the best candidates.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/recruiter/signup"
          >
            Post an Internship
          </Button>
        </Paper>

        <Box py={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Companies Hiring Right Now
          </Typography>
          <TextField
            label="Search Companies"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400, mb: 3, bgcolor: "#f5f5f5", borderRadius: 1 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch} sx={{ color: "#1976d2" }}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container spacing={3}>
            {filteredCompanies.map((company, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: 3,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedJob(company)}
                >
                  <CardContent>
                    <Typography variant="h6">{company.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {company.industry}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {company.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Job Details Dialog */}
        {selectedJob && (
          <Dialog
            open={Boolean(selectedJob)}
            onClose={() => setSelectedJob(null)}
          >
            <DialogTitle>{selectedJob.name}</DialogTitle>
            <DialogContent>
              <Typography variant="body1" gutterBottom>
                {selectedJob.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Location: {selectedJob.location}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Industry: {selectedJob.industry}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedJob(null)} color="secondary">
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                LinkComponent={Link}
                to="/ApplyPage"
              >
                Apply Now
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>

      {/* Put the footer in a different component file */}
      <Box sx={{ bgcolor: "#0a174e", color: "white", py: 5, mt: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold">
                Get in Touch
              </Typography>
              <Typography variant="body2">Mail us</Typography>
              <Typography variant="body2" color="gray">
                info@entrepreneurshipnetwork.net
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold">
                Quick Links
              </Typography>
              <Typography variant="body2">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/browse-internships">Browse Internships</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/guidelines">Guidelines</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/contact">Contact Us</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/about">About</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/career-advice">Career Advice</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/post-internship">Post an Internship</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/help-center">Help Center</Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/admin/login">Administrator Login</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold">
                Subscribe
              </Typography>
              <Typography variant="body2">
                Don't miss any updates of your application, kindly fill the form
                below..!
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Enter your email address"
                  variant="outlined"
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
                <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                  SUBSCRIBE
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" mt={4}>
            <Typography variant="body2" color="gray">
              Copyright © 2025, All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LandingPage;
