import React from 'react'
import * as S from './styled'

interface IModalProps {
  toggleModal: () => void
  isOpen: boolean
}

const Modal: React.FC<any> = (props) => {
  const { children, toggleModal, isOpen } = props

  if (!isOpen) {
    return null
  }

  return (
    <S.Wrapper onClick={() => toggleModal()}>
      <S.Inner onClick={(event) => event.stopPropagation()}>{children}</S.Inner>
    </S.Wrapper>
  )
}

export default Modal
