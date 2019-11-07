import { connect } from 'react-redux'
import { toggleModal } from '../../actions/modal'
import Modal from './Modal'

function mapStateToProps(state: IState) {
  return {
    isOpen: state.modal.isModalOpen
  }
}

const mapDispatchToProps = {
  toggleModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
