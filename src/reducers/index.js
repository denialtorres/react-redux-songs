import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Kyoto", duration: "4:05" },
    { title: "Nobody", duration: "2:45" },
    { title: "Be Sweet", duration: "3:33" },
    { title: "Homura", duration: "3:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
