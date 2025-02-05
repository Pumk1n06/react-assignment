import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // React Spring Animation for Smooth Fade-in
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 14 },
  });

  // Button Hover Effect
  const [hoverStyle, setHoverStyle] = useSpring(() => ({
    transform: "scale(1)",
  }));

  // Mock user credentials
  const mockUser = {
    email: "test@example.com",
    password: "password123",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (email === mockUser.email && password === mockUser.password) {
      setError("");
      alert("Sign in successful!");
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw", 
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 2,
      }}
    >
      <animated.div style={fadeIn}>
        <Paper
          sx={{
            padding: 5,
            boxShadow: 6,
            borderRadius: 3,
            width: "100%",
            maxWidth: 400, 
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            Sign In
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="start">
                      {showPassword ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <animated.div
              onMouseEnter={() => setHoverStyle({ transform: "scale(1.05)" })}
              onMouseLeave={() => setHoverStyle({ transform: "scale(1)" })}
              style={hoverStyle}
            >
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign In
              </Button>
            </animated.div>
          </Box>
        </Paper>
      </animated.div>
    </Box>
  );
};

export default SignIn;
