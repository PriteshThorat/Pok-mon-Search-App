# Pokémon Search App

A simple web app to search for Pokémon by name or ID, displaying relevant information about the Pokémon such as its type, abilities, and base stats. The app fetches data from the [PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon).

## Features

- Search for Pokémon by name or ID.
- Display Pokémon details including:
  - Name
  - ID
  - Type(s)
  - Abilities
  - Base stats (HP, Attack, Defense, etc.)
  - Image
- Simple and responsive UI.

## Technologies Used

- HTML
- CSS
- JavaScript 
- [PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon) for fetching Pokémon data

## Usage

1. Enter a Pokémon name or ID in the search bar.
   
2. Click the "Search" button or press "Enter."
   
3. The app will display the Pokémon's details if found, or show an error message if the Pokémon doesn't exist.
   
## API Reference
This app uses the PokéAPI Proxy, a free RESTful API that provides information about Pokémon.

- Base URL: [https://pokeapi-proxy.freecodecamp.rocks/api/pokemon](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon)
- Endpoints used: /pokemon/{id or name}: Fetches details about a Pokémon by ID or name.
## Example
Searching for "Pikachu" returns:

- Name: Pikachu
- ID: 25
- Type(s): Electric
- Abilities: Static, Lightning Rod 
- Base stats: HP: 35, Attack: 55, Defense: 40, etc.

## Deployed Website
You can access the deployed website [here](https://priteshthorat.github.io/Pok-mon-Search-App/).
