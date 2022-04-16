import React from 'react'
import { useSearchParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  login: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundColor: "black",

    "& img": {
      width: "50%",
    },

    "& a": {
      padding: "20px",
      borderRadius: "99px",
      backgroundColor: "#1db954",
      fontWeight: 600,
      color: "white",
      textDecoration: "none",
    },

    "& a:hover": {
      backgroundColor: " white",
      borderColor: "#1db954",
      color: "#1db954",
    },
  },
});

const DataView = () => {
    const [searchParams] = useSearchParams();
    const spotifyCode = searchParams.get("code")
    const classes = useStyles();

  return (
    <div className={classes.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />
      <h4>{spotifyCode}</h4>
    </div>
  )
}

export default DataView