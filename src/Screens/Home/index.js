import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import {actions} from '../../Redux/UserRedux';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchersToProps = dispatch => ({
  getUser() {
    dispatch(actions.requestApiData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchersToProps,
)(HomeScreen);
