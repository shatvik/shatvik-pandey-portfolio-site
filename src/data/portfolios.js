import uuid from "react-uuid";
import { git } from "../utils/Icons";
import weather from "../img/portImages/weather.png";
import snake from "../img/portImages/snake.png";
import todo from "../img/portImages/todo.png";
import music from "../img/portImages/music.png";
import tictactoe from "../img/portImages/tictactoe.png";
import ludo from "../img/portImages/ludo.png";
import memes from "../img/portImages/memes.png";

export const portfolios = [
  {
    id: uuid(),
    category: "Webapp",
    title: "Weather App",
    link1: "https://github.com/shatvik/weather-app-angular",
    image: weather,
    icon1: git,
  },
  {
    id: uuid(),
    category: "Webapp",
    title: "Memes Generator App",
    link1: "https://github.com/shatvik/random-meme-generator",
    image: memes,
    icon1: git,
  },

  {
    id: uuid(),
    category: "Games",
    title: "Ludo UI (but very soon to be game..)",
    link1: "https://github.com/shatvik/Ludo-UI",
    image: ludo,
    icon1: git,
  },
  {
    id: uuid(),
    category: "Webapp",
    title: "Music Player App",
    link1: "https://github.com/shatvik/My-music-App",
    image: music,
    icon1: git,
  },

  {
    id: uuid(),
    category: "Webapp",
    title: "To Do List App",
    link1: "https://github.com/shatvik/To-Do-List",
    image: todo,
    icon1: git,
  },
  {
    id: uuid(),
    category: "Games",
    title: "Snake ball it game",
    link1: "https://github.com/shatvik/Snake-game-javascript",
    image: snake,
    icon1: git,
  },

  {
    id: uuid(),
    category: "Games",
    title: "Tic-Tac-Toe game",
    link1: "https://github.com/shatvik/Tic-Tac-Toe-game",
    image: tictactoe,
    icon1: git,
  },
];
