import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

function Search({ handleChange, search, setSearch }) {
  useEffect(() => {
    const timer = setTimeout(handleChange, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <form>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        sx={{ width: "100%" }}
        placeholder="Search repository"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
