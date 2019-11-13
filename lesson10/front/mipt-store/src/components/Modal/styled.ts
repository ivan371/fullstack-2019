import styled, { keyframes } from 'styled-components'

import { Section } from '../styled'

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const rise = keyframes`
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  animation-name: ${fade};
  animation-duration: 0.5s;
`

export const Inner = styled.div`
  border-radius: 8px;
  background-color: white;
  cursor: auto;
  animation-name: ${rise};
  animation-duration: 0.3s;

  ${Section} {
    border-radius: 8px;
    margin-top: 0;
  }
`
