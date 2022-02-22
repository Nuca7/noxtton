import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRepository, getUsedLanguages, getContributors } from "../api/index";
import { convertDate, copyText } from "../helperFunctions";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function RepositoryDetail() {
  const params = useParams();
  const [repository, setRepository] = useState({});

  async function fetchData() {
    const {
      owner: { avatar_url },
      description,
      forks_count,
      watchers,
      clone_url,
      created_at,
      updated_at,
    } = await getRepository(params.user, params.repository);
    const languages = await getUsedLanguages(params.user, params.repository);
    // const contributors = await getContributors(params.user, params.repository);

    const obj = {
      user: params.user,
      name: params.repository,
      avatar_url,
      description,
      forks_count,
      watchers,
      clone_url,
      created_at: convertDate(created_at),
      updated_at: convertDate(updated_at),
      languages,
      // contributors,
    };
    setRepository(obj);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (Object.keys(repository).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <Link to={"/"}>back to home</Link>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              alt={repository.user}
              src={repository.avatar_url}
              sx={{ width: 100, height: 100 }}
            />
          }
          action={
            <IconButton onClick={() => copyText(repository.clone_url)}>
              <ContentCopyIcon />
            </IconButton>
          }
          title={repository.user}
          subheader={repository.name}
        />

        <CardContent>
          {repository.description && (
            <p>
              <span className="bold">Description: </span>
              {repository.description}
            </p>
          )}
          <p>
            <span className="bold">forks: </span>
            {repository.forks_count}
          </p>
          <p>
            <span className="bold">stars: </span>
            {repository.watchers}
          </p>
          <p>
            <span className="bold">created: </span>
            {repository.created_at}
          </p>
          <p>
            <span className="bold">updated: </span>
            {repository.updated_at}
          </p>
          <p>
            <span className="bold">languages: </span>
            {repository.languages}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default RepositoryDetail;
//
