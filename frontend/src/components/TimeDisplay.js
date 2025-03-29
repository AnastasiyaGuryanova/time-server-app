import {
  Container,
  Paper,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useServerTime } from "../hooks/useServerTime";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

export const TimeDisplay = () => {
  const { time, isLoading } = useServerTime(backendUrl);

  if (isLoading) {
    return (
      <Container maxWidth="sm" sx={{ pt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ pt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Server Time
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Current Time:</Typography>
          <Typography variant="body1">{time}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};
