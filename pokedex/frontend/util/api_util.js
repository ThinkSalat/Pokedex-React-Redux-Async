export const fetchAllPokemon = () => (
  $.get({
    url: 'api/pokemon'
  })
);
