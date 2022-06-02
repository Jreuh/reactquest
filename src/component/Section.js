import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Champion from "../data/champion";
import "../styles/section.css";

export default function LaCarte() {
  return (
    <div className="Card">
      {Champion.map((stagiaire) => (
        <div key={stagiaire.prenom}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia>
              <img
                className="CardImg"
                src={stagiaire.Avatar}
                alt={stagiaire.prenom}
              ></img>{" "}
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {stagiaire.prenom} {stagiaire.Nom}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                age : {stagiaire.Age}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
