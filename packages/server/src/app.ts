import * as io from "socket.io";

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
