import { connect } from 'react-redux'
import { openDetails } from '../actions/'
import ListItemComp from './../components/listitem'

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
    onClick: () => {
      dispatch(openDetails(ownProps))
    }
  }
}

const Listitem = connect(
  null,
  mapDispatchToProps
)(ListItemComp)

export default Listitem