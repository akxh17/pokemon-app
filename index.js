const pokemonData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImage = document.getElementById("image");
const pokemonType = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSattack = document.getElementById("special-attack");
const pokemonSdefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const checkInput = async (event) => {
  event.preventDefault();
  try {
    const pokemonInput = input.value.toLowerCase();
    const res = await fetch(`${pokemonData}${pokemonInput}`);
    const data = await res.json();
    getPokemonData(data);
  } catch (err) {
    console.log("error  ", err);
    alert("Pokémon not found");
  }
};

const getPokemonData = (data) => {
  const { name, id, height, weight, sprites, types, stats } = data;
  pokemonName.innerHTML = name.toUpperCase();
  pokemonId.innerHTML = "#" + id;
  pokemonWeight.innerHTML = "Weight: " + weight;
  pokemonHeight.innerHTML = "Height: " + height;
  pokemonImage.innerHTML = `<img id="sprite" src="${sprites.front_default}"/> `;
  pokemonType.innerHTML = types
    .map((obj) => `<span id="type-span">${obj.type.name.toUpperCase()}</span>`)
    .join(" ");
  pokemonHp.innerHTML = stats[0].base_stat;
  pokemonAttack.innerHTML = stats[1].base_stat;
  pokemonDefense.innerHTML = stats[2].base_stat;
  pokemonSattack.innerHTML = stats[3].base_stat;
  pokemonSdefense.innerHTML = stats[4].base_stat;
  pokemonSpeed.innerHTML = stats[5].base_stat;
};

button.addEventListener("click", checkInput);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
