export const fetchAllPokemon = () => (
  $.get({
    url: 'api/pokemon'
  })
);

export const getPokemon = (id) => (
  $.get({
    url: `api/pokemon/${id}`
  })
);
