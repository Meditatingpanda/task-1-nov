import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { fetchPokemon } from "./utils/Utils";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchPokemon(100, 20).then((res) => setData(res));
  }, []);

  return (
    <Box >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {data.map((el: Object, id: number) => {
          return <Card key={id} {...el} />;
        })}
      </Box>
      <Pagination count={10} color="primary" />
    </Box>
  );
}

export default App;
