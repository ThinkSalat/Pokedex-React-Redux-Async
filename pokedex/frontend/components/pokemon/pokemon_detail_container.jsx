import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon, selectItems } from '../../reducers/selectors';

const mapStateToProps = (state,ownProps) => ({
    // piece of state that container subscribes to
    pokemon: selectSinglePokemon(state,ownProps.match.params.pokemon_id),
    items: selectItems(state)
  });

const mapDispatchToProps = dispatch =>({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PokemonDetail);
