import { Box, Typography, Paper, Avatar, Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "../App.css";

const data = [
  { name: "Day 1", users: 5 },
  { name: "Day 2", users: 10 },
  { name: "Day 3", users: 15 },
];

// Sample user data (can be fetched dynamically in a real app)
const user = {
  name: "Hello User",
  email: "newuser@example.com",
  avatar: "https://via.placeholder.com/100", // Placeholder image
};

const Dashboard = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 2,
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
    }}
  >
    <Paper
      sx={{
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        width: "90%",
        maxWidth: 800,
        textAlign: "center",
        minHeight: "500px",
      }}
    >
      {/* User Profile Section (Now Side by Side) */}
      <Grid container spacing={2} alignItems="center" justifyContent="left" sx={{ marginBottom: 3 }}>
        <Grid item display="flex" alignItems="center">
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 60, height: 60, border: "2px solid #8884d8", marginRight: 2 }}
          />
          <Box textAlign="left">
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Chart Section */}
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
