import { Box, Typography, Paper } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "../App.css";

const data = [
  { name: "Day 1", users: 5 },
  { name: "Day 2", users: 10 },
  { name: "Day 3", users: 15 },
];

const Dashboard = () => (
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
        width: "90%",  // Set width to 90% to ensure responsiveness
        maxWidth: 800,  // Max width for larger screens
        textAlign: "center",
        minHeight: "500px",  // Ensure the Paper has a minimum height
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        User Growth Over Time
      </Typography>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </Paper>
  </Box>
);

export default Dashboard;
