import { connect } from 'react-redux';
import { selectItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state,ownProps) => ({
    // piece of state that container subscribes to
    item: selectItem(state,ownProps.match.params.item_id)
  });

const mapDispatchToProps = dispatch =>({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ItemDetail);
