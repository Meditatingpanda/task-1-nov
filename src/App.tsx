import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { fetchPokemon } from "./utils/Utils";

function App() {
  const [data, setData] = useState<any>([]);
  const [originalData, setoriginalData] = useState<any>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetchPokemon(0, 20).then((res) => setoriginalData(res));
  }, []);
  useEffect(() => {
    setData(originalData);
  }, [originalData]);

  const handleQuery = () => {
    let filteredData;
    if (query.length > 0) {
      filteredData = originalData.filter((item: any) =>
        item.name.includes(query)
      );
    } else {
      filteredData = originalData;
    }
    //console.log(filteredData);
    setData(filteredData);
  };
  useEffect(() => {
    handleQuery();
  }, [query]);

  return (
    <Box>
      <Navbar setQuery={setQuery} />
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
}

export default App;
