import React, { useState, useEffect } from "react";
import { getRepositories } from "../api/index";
import Repositories from "./Repositories";
import Search from "./Search";
import { useInfiniteScroll } from "../context/infiniteScroll";
import { Box } from "@mui/material";

function Landing() {
  const { page, setPage, loading, setLoading } = useInfiniteScroll();
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);

  async function fetchData() {
    setLoading(true);
    const { items } = await getRepositories(search, page);
    setRepositories((repos) => {
      if (page === 1) {
        return items;
      } else {
        return [...repos, ...items];
      }
    });
    setLoading(false);
  }

  useEffect(() => {
    if (!search) return;
    fetchData();
  }, [page]);

  function handleChange() {
    if (!search) return;
    if (page > 1) {
      setRepositories([]);
      setPage(1);
    }
    fetchData();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "20px auto",
        gap: "30px",
      }}
    >
      <Search
        handleChange={handleChange}
        search={search}
        setSearch={setSearch}
      />
      {repositories.length !== 0 && (
        <Repositories repositories={repositories} />
      )}
      {loading && <p>Loading...</p>}
    </Box>
  );
}

export default Landing;
