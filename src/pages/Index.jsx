import React, { useState } from "react";
import { Box, Heading, Text, Button, Grid, Image, Input, Select, Checkbox, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const games = [
  {
    id: 1,
    title: "Game 1",
    genre: "Action",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lJTIwY292ZXJ8ZW58MHx8fHwxNzEyMjQwMjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Game 2",
    genre: "Adventure",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBnYW1lJTIwY292ZXJ8ZW58MHx8fHwxNzEyMjQwMjAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Game 3",
    genre: "Strategy",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGdhbWUlMjBjb3ZlcnxlbnwwfHx8fDE3MTIyNDAyMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    title: "Game 4",
    genre: "RPG",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxycGclMjBnYW1lJTIwY292ZXJ8ZW58MHx8fHwxNzEyMjQwMjAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    title: "Game 5",
    genre: "Thriller",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1555661530-68c8e98db4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMGdhbWUlMjBjb3ZlcnxlbnwwfHx8fDE3MTIyNDAyMDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    title: "Game 6",
    genre: "Shooter",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581647405960-0c6f7d0b6c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaG9vdGVyJTIwZ2FtZSUyMGNvdmVyfGVufDB8fHx8MTcxMjI0MDIwM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isPromoted, setIsPromoted] = useState(false);
  const toast = useToast();

  const addToCart = (game) => {
    setCart([...cart, game]);
    toast({
      title: "Game added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const checkout = () => {
    setCart([]);
    toast({
      title: "Checkout successful",
      description: "Thank you for your purchase!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedGenre === "" || game.genre === selectedGenre));

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Games Marketplace
      </Heading>
      <Text fontSize="xl" mb={8}>
        Discover and buy the latest games at the best prices!
      </Text>
      <Box mb={8}>
        <Input placeholder="Search games..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} mr={4} />
        <Select placeholder="Select genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} w={200}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Strategy">Strategy</option>
          <option value="RPG">RPG</option>
          <option value="Thriller">Thriller</option>
          <option value="Shooter">Shooter</option>
        </Select>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {filteredGames.map((game) => (
          <Box key={game.id} borderWidth={1} borderRadius="md" p={4}>
            <Image src={game.image} alt={game.title} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {game.title}
            </Heading>
            <Text mb={2}>{game.genre}</Text>
            <Text fontWeight="bold" mb={4}>
              ${game.price}
            </Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue" onClick={() => addToCart(game)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Cart
        </Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <>
            {cart.map((game) => (
              <Box key={game.id} mb={2}>
                {game.title} - ${game.price}
              </Box>
            ))}
            <Button colorScheme="green" onClick={checkout} mt={4}>
              Checkout
            </Button>
          </>
        )}
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Add a Game
        </Heading>
        <Text mb={4}>Fill out the form below to add a new game to the marketplace.</Text>
        <Input placeholder="Game title" mb={4} />
        <Select placeholder="Select genre" mb={4}>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Strategy">Strategy</option>
          <option value="RPG">RPG</option>
          <option value="Thriller">Thriller</option>
          <option value="Shooter">Shooter</option>
        </Select>
        <Input placeholder="Price" type="number" mb={4} />
        <Checkbox isChecked={isPromoted} onChange={(e) => setIsPromoted(e.target.checked)} mb={4}>
          Promote with special visibility (extra charge)
        </Checkbox>
        <Button colorScheme="teal">Add Game</Button>
      </Box>
    </Box>
  );
};

export default Index;
