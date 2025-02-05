import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Typography, Box, Container } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../App.css"

const Counter = () => {
  // Get initial count from localStorage or default to 0
  const savedCount = localStorage.getItem("count");
  const initialCount = savedCount ? parseInt(savedCount) : 0;

  const [count, setCount] = useState(initialCount);

  const background = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count / 10})`,
    config: { tension: 120, friction: 14 },
  });

  // Save the count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <Container
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
      <animated.div
        style={{
          ...background,
          padding: "150px",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" color={blue[700]} sx={{ marginBottom: 3 }}>
          {count}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
            sx={{ padding: "10px 20px" }}
          >
            +
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setCount(0)}
            sx={{ padding: "10px 20px" }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setCount(count - 1)}
            sx={{ padding: "10px 20px" }}
          >
            -
          </Button>
        </Box>
      </animated.div>
    </Container>
  );
};

export default Counter;
