import * as io from "socket.io";
import * as tmi from "tmi.js";
import * as dotenv from "dotenv";

dotenv.config();

interface Product {
  title: string;
  description: string;
  image: string;
  key: string;
}

interface Vote {
  user: string;
  product: Product["key"];
  review?: string;
}
const options = {
  options: {debug: true},
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  channels: ["juanma_piojoso"],
};

const client = new tmi.client(options);

client.on("connected", (address, port) => {
  console.log(`Hello ${address}:${port}`);
});

// tmi
client.connect();

client.on("chat", (target, ctx, msg, self) => {
  if (self) return;

  const commandName = msg.trim();

  if (commandName === "!A") {
    console.log("Hola Juanma desde Twitch");
  }

  if (commandName === "!B") {
    console.log("Chau desde Twitch");
  }
});

const server = new io.Server(5000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const products: Product[] = [
  {
    key: "A",
    description: "Product A Description",
    title: "Product A title",
    image: "//placehold.it/256x256",
  },
  {
    key: "B",
    description: "Product B Description",
    title: "Product B title",
    image: "//placehold.it/256x256",
  },
];
const votes: Vote[] = [
  {
    user: "Juanma",
    product: "A",
    review: "Horrible",
  },
  {
    user: "Juanma",
    product: "B",
    review: "Feo",
  },
  {
    user: "Juanma",
    product: "B",
    review: "Hermoso",
  },
];

server.on("connection", (socket) => {
  socket.emit("state", {products, votes});
});
