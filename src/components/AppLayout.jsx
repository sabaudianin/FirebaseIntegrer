import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box sx={{ background: "#e6f7ff" }}>
      <Nav />

      <Box sx={{ marginTop: "2rem", padding: "1rem" }}>
        <Outlet />
      </Box>
    </Box>
  );
};