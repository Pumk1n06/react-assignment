import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container, Paper } from "@mui/material";
import { FaPlus, FaEdit, FaUser, FaChartBar } from "react-icons/fa"; // Updated to use FaPlus for Counter

const Home: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 4,
        backgroundColor: "#eaf1ff", // Soft background color for better contrast
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Heading with improved styling */}
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{
          fontWeight: 600,
          color: "#3f51b5", // Primary color for heading
        }}
      >
        Welcome to the Dashboard
      </Typography>

      {/* Box for navigation buttons with improved spacing and layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid layout
          gap: 2,
          width: "100%",
          maxWidth: 800,
          marginTop: 3,
        }}
      >
        {/* Counter Button */}
        <Link to="/counter">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50", // Green button color
              "&:hover": {
                backgroundColor: "#388e3c", // Darker green on hover
              },
              padding: "15px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <FaPlus style={{ marginRight: "8px", fontSize: "20px" }} />
            Counter
          </Button>
        </Link>

        {/* Editor Button */}
        <Link to="/editor">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2196f3", // Blue button color
              "&:hover": {
                backgroundColor: "#1976d2", // Darker blue on hover
              },
              padding: "15px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <FaEdit style={{ marginRight: "8px", fontSize: "20px" }} />
            Rich Text Editor
          </Button>
        </Link>

        {/* User Data Form Button */}
        <Link to="/form">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9800", // Orange button color
              "&:hover": {
                backgroundColor: "#f57c00", // Darker orange on hover
              },
              padding: "15px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <FaUser style={{ marginRight: "8px", fontSize: "20px" }} />
            User Data Form
          </Button>
        </Link>

        {/* Dashboard Button */}
        <Link to="/dashboard">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9c27b0", // Purple button color
              "&:hover": {
                backgroundColor: "#7b1fa2", // Darker purple on hover
              },
              padding: "15px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <FaChartBar style={{ marginRight: "8px", fontSize: "20px" }} />
            Dashboard
          </Button>
        </Link>
      </Box>

      {/* Optional Info Section */}
      <Paper
        sx={{
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: 800,
          marginTop: 4,
        }}
      >
        <Typography variant="h6" gutterBottom textAlign="center">
          Choose a section above to get started.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
