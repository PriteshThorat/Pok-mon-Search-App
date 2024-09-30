const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImg = document.getElementById("pokemon-img");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const typesText = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const pokemonDetails = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchPokemonName = async (value) => {
  try {
    const res = await fetch(pokemonDetails);
    const data = await res.json();
    displayPokemon(data, value);
  } catch (err) {
    console.log(err);
  }
};

const reset = () => {
  searchInput.value = "";
  weightText.textContent = "";
  heightText.textContent = "";
  types.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  pokemonImg.textContent = "";
  pokemonName.textContent = "";
  pokemonId.textContent = "";
};

const fetchPokemonDetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      details(data);
    } catch (err) {
      console.log(err);
    }
};

const details = (url) => {
  const { weight, height, types, stats, sprites } = url;

  weightText.textContent = `Weight: ${weight}`;
  heightText.textContent = `Height: ${height}`;

  types.forEach((el, i) => {
    const { slot, type } = el;
    const { name } = type;

    i = 1 - i;

    typesText.innerHTML += `
    <button class="type${i} typeChild">${name.toUpperCase()}</button>
    `;
  });

  stats.forEach(el => {
    const { base_stat, stat } = el;
    const { name } = stat;

    switch (name) {
      case "hp":
        hp.textContent = base_stat;
      break;
      case "attack":
        attack.textContent = base_stat;
      break;
      case "defense":
        defense.textContent = base_stat;
      break;
      case "special-attack":
        specialAttack.textContent = base_stat;
      break;
      case "special-defense":
        specialDefense.textContent = base_stat;
      break;
      case "speed":
        speed.textContent = base_stat;
      break;
    }
  });

  const { front_default } = sprites;

  pokemonImg.innerHTML = `<img id="sprite" src="${front_default}" alt="Pokemon Image">`;
};

const displayPokemon = (data, value) => {
  let isFound = true;
  const valueLC = value.replace(" ", "-").toLowerCase();
  const { counts, results } = data;
  
  results.forEach(el => {
    const { id, name, url } = el;
    if (valueLC == id || valueLC === name) {
      isFound = false;
      pokemonName.textContent = name.replace("-", " ").toUpperCase();
      pokemonId.textContent = `#${id}`;
      fetchPokemonDetails(url);
      return;
    }
  });
  if (isFound) {
    alert("Pokémon not found");
  }
};

searchButton.addEventListener("click", () => {
  const value = searchInput.value;
  if (value === "") {
    alert("Please Enter Pokémon Name");
  } else {
    reset();
    fetchPokemonName(value);
  }
});