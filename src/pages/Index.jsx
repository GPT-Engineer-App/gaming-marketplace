import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

const Index = () => {
 
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "",
    price: 0,
    isPromoted: false,
  });

  const toast = useToast();

  const addGame = () => {
    const gameId = games.length + 1;
    const game = {
      id: gameId,
      title: newGame.title,
      genre: newGame.genre,
      price: newGame.price,
      image: "https://via.placeholder.com/150",
      isPromoted: newGame.isPromoted,
    };
    setGames([...games, game]);
    setNewGame({
      title: "",
      genre: "",
      price: 0,
      isPromoted: false,
    });
    toast({
      title: "Game added",
      description: "The new game has been added to the marketplace.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {}
      <Button onClick={addGame}>Add Game</Button>
    </>
  );
};

export default Index;
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "",
    price: 0,
    isPromoted: false,
  });

  const toast = useToast();

  const addGame = () => {
    const gameId = games.length + 1;
    const game = {
      id: gameId,
      title: newGame.title,
      genre: newGame.genre,
      price: newGame.price,
      image: "https://via.placeholder.com/150",
    };
    setGames([...games, game]);
    setNewGame({
      title: "",
      genre: "",
      price: 0,
      isPromoted: false,
    });
    toast({
      title: "Game added",
      description: "The new game has been added to the marketplace.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };