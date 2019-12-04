import { TOGGLE_MODAL } from '../actions/modal'

const initialState: IModalState = {
  isModalOpen: false
}

export default function modal(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        isModalOpen: !state.isModalOpen
      }
    }
    default: {
      return state
    }
  }
}
