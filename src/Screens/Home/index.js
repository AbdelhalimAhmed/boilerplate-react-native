import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import { requestApiData } from '../../Redux/UserRedux'
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchersToProps = dispatch => ({
  getUser () {
    dispatch(requestApiData())
  }
})

export default connect(mapStateToProps, mapDispatchersToProps)(HomeScreen)
