import { Box, Button, ButtonGroup, Card, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "#404258",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined" elevation={5} sx={{ p: 5 }}>
        <Typography textAlign={'center'} mb={4}>Choose The Page</Typography>
        <ButtonGroup>
          <Button href="/paginate">Paginate</Button>
          <Button href="/lazyloading">Lazy Loading</Button>
        </ButtonGroup>
      </Card>
    </Box>
  );
};

export default Home;
