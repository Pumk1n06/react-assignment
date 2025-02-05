import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import "../App.css"

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isFormModified, setIsFormModified] = useState(false);

  // Load saved data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormModified(true);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Save data to localStorage (already handled by useEffect)
    alert("Data saved!");
    setIsFormModified(false);
  };

  // Prompt for unsaved changes when the user tries to close the tab or browser
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormModified) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        e.returnValue = message; // Standard for most browsers
        return message; // For some browsers like Chrome
      }
    };

    // Ensure that the event listener is cleaned up when the component unmounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormModified]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh", // Ensures it takes up full height
        width: "100vw", // Full width
        margin: 0, // RemRemove any default margin
      }}
    >
      <Paper
        sx={{
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          User Data Form
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            padding: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDataForm;
