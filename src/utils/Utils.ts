import axios from "axios";

const genImghelper = (img: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`;
};

//api path
//https://pokeapi.co/api/v2/pokemon/
const baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (offset: number, limit: number): Promise<any> => {
  const res = await axios.get(baseUrl, {
    params: {
      offset: offset,
      limit: limit,
    },
  });
  const data = res.data.results;
  const pokemon = data.map((result: any, index: number) => {
    return {
      name: result.name,
      url: result.url,
      image: genImghelper(index + 1 + offset),
    };
  });
 // console.log(pokemon); //check the data
  return pokemon;
};

export { genImghelper, fetchPokemon };
