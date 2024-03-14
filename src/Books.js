import AlchemistImage from "./images/alchemist.webp";
import EchoesImage from "./images/echoes.webp";
import ForgottenImage from "./images/forgotten.webp";
import CodeImage from "./images/code.webp";
import WhispersImage from "./images/whispers.webp";
import { nanoid } from "nanoid";

export default [
  {
    id: nanoid(),
    title: "The Stars My Destination",
    image: "https://pictures.abebooks.com/isbn/9780425055243-us.jpg",
    author: "Alfred Bester",
    genre: "Science Fiction",
    description:
      "the story of an unambitious and directionless man named Gulliver Foyle who is abandoned in a damaged spaceship and, through his own rage and a series of mishaps, remakes himself as an aristocrat in a society wrecked by the invention of teleportation to stalk the people who did him wrong.",
  },
  {
    id: nanoid(),
    title: "Echoes of Tomorrow",
    author: "Miranda Foster",
    genre: "Science Fiction",
    description:
      "In a world where time travel is a reality, a young scientist unravels a conspiracy that could change the course of history.",
    image: EchoesImage,
  },
  {
    id: nanoid(),
    title: "Code of Despair",
    author: "Lucas M. Reynolds",
    genre: "Science Fiction",
    description:
      "In the heart of Kauai, a group of six coding bootcamp students stumble upon an algorithm that could revolutionize the world of cybersecurity. But as they delve deeper, they find themselves entangled in a web of deceit and corporate espionage. With every line of code, they draw closer to danger, and their tech skills are the only thing standing between order and digital chaos. Can they survive the cutthroat world of tech, or will their first foray into the industry be their last?",
    image: CodeImage,
  },
  {
    id: nanoid(),
    title: "The Last Alchemist",
    author: "Clara Davenport",
    genre: "Fantasy",
    description:
      "An epic journey of an alchemist's apprentice who must find the mythical Philosopher's Stone to save their dying world.",
    image: AlchemistImage,
  },
  {
    id: nanoid(),
    title: "Whispers of the Deep",
    author: "Samuel Wright",
    genre: "Fantasy",
    description:
      "A marine biologist's discovery of a strange underwater sound leads to a dark secret lurking beneath the ocean's surface.",
    image: WhispersImage,
  },
  {
    id: nanoid(),
    title: "Chronicles of the Forgotten Lands",
    author: "Lydia Green",
    genre: "Fantasy",
    description:
      "A band of unlikely heroes embarks on a quest to uncover the mysteries of a land erased from all maps and memories.",
    image: ForgottenImage,
  },
];
