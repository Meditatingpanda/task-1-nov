import { Box, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../components/Navbar";
import { fetchPokemon, Pokemon } from "../utils/Utils";
const ImageComponent = React.lazy(() => import("../components/Card"));

const LazyLoading = () => {
  const [listItems, setListItems] = useState<Pokemon[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setFilteredData(listItems);
  }, [listItems]);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
     {
      console.log(isFetching);
      return;
     }
    setIsFetching(true);
    console.log(isFetching);
  };
  const handleQuery = () => {
    let filteredData;
    if (query.length > 0) {
      filteredData = listItems.filter((item: any) =>
        item.name.includes(query.toLowerCase())
      );
    } else {
      filteredData = listItems;
    }
    //console.log(filteredData);
    setFilteredData(filteredData);
  };

  useEffect(() => {
    handleQuery();
  }, [query]);

  const fetchData = async () => {
    setTimeout(async () => {
      const result = await fetchPokemon((page - 1) * 70, 70);
      // const data = await result.json();
      setPage(page + 1);
      setListItems((pre: Pokemon[]) => {
        return [...pre, ...result];
      });
    }, 1000);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };
  return (
    <>
      <Navbar setQuery={setQuery} />
      <Toolbar />
      <Box sx={{overflowX:'hidden'}} >
        {filteredData.map((listItem: Pokemon, id: number) => (
          <div className="card" key={id}>
            <Suspense
              fallback={<ImageComponent name={"demo"} image={""} url={""} />}
            >
              <ImageComponent
                name={listItem.name}
                image={listItem.image}
                url={listItem.url}
                lazy={true}
              />
            </Suspense>
          </div>
        ))}
      </Box>
      {isFetching && (
        <Typography variant="h1" textAlign={"center"}>
          Fetching more list items...
        </Typography>
      )}
    </>
  );
};

export default LazyLoading;
