import { connect } from 'react-redux'
import { closeDetails } from '../actions/'
import DetailsComp from './../components/details'

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.details.item
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(closeDetails())
    }
  }
}

const Details = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComp)

export default Details