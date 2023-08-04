//import { PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
//import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ discover_weekly, user }, dispatch] = useDataLayerValue();
  //const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={user?.images[0]?.url} alt="image"></img>
        <div className="body_infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          {
            /*console.log("items");*/
          }
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}

export default Body;
