import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { CardContent, CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import Star from "./Star";

function Repositories({ repositories }) {
  return (
    <div>
      {repositories.map((repository) => {
        const {
          id,
          full_name,
          watchers,
          language,
          updated_at,
          owner: { avatar_url, login },
        } = repository;

        return (
          <Card key={id} sx={{ display: "flex" }} variant="outlined">
            <CardMedia
              component="img"
              src={avatar_url}
              alt={login}
              sx={{ width: 100, height: 100 }}
            />

            <CardContent>
              <Link to={`/repository/${full_name}`}>{full_name}</Link>
              <div style={{ display: "flex" }}>
                <Star>{watchers}</Star>
                <p>{language}</p>
                <p>updated on {moment(updated_at).format("ll")}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Repositories;
