import React from "react";
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

const Home = () => {
  const classes = useStyles();
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const requestInfo = {
    client_id: "19471fa4ae2345f6938568096c26bd53",
    response_type: "code",
    redirect_uri: "https://spotify-viewer.vercel.app/user_data/",
    scope: ["user-top-read"],
  };

  const uri = `${authEndpoint}?client_id=${
    requestInfo.client_id
  }&response_type=code&redirect_uri=${
    requestInfo.redirect_uri
  }&scope=${requestInfo.scope.join("%20")}`;

  return (
    <div className={classes.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />
      <a href={uri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Home;
