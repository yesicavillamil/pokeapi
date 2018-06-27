
  var baseURL = "https://pokeapi.co/api/v2/pokemon-form/4/";
  $.get(baseURL, function (pokemon) {
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("weight").innerHTML = pokemon.weight;
    document.getElementById("image").src = pokemon.sprites.front_default;
    document.getElementById("hab").innerHTML = pokemon.abilities.ability.name;
  });
