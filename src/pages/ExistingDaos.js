import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/SelectTemplate.scss";
import { Button, CardActions } from "@mui/material";
import img from "../assets/section3.jpg";
// import TemplateDetails from "./TemplateDetails";
import { useNavigate } from "react-router-dom";

function ExistingDaos() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      cover: img,
      title: "Template 1",
      info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      cover: img,
      title: "Template 2",
      info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      cover: img,
      title: "Template 3",
      info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ]);
  return (
    <div className="select-main">
      <h1>Your DataDAOs</h1>
      <p>Click on any datadao to open dashboard for that dao.</p>
      <div className="templates-div">
        {data.map((item, key) => {
          return (
            <Card
              sx={{
                width: "100%",
                maxWidth: 400,
              }}
              key={key}
            >
              <CardActionArea
                onClick={() => {
                  navigate(`/open-existing-data-dao/${item.title}`, {
                    state: {
                      cover: item.cover,
                      title: item.title,
                      info: item.info,
                    },
                  });
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.cover}
                  alt="green iguana"
                />
                <CardContent sx={{}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="template-info"
                  >
                    {item.info}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ExistingDaos;
