import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { fetchPokemon } from "./utils/Utils";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchPokemon(40, 20).then((res) => setData(res));
  }, []);

  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((el: Object, id: number) => {
          return <Card key={id} {...el} />;
        })}
      </Box>
    </div>
  );
}

export default App;
