import { connect } from 'react-redux'
import { openDetails } from '../actions/'
import MapsComp from './../components/maps'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (item) => {
      dispatch(openDetails(item))
    }
  }
}

const Maps = connect(
  null,
  mapDispatchToProps
)(MapsComp)

export default Maps