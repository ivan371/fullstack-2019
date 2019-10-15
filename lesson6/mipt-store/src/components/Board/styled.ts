import styled from 'styled-components'
import { Section } from '../styled'

export const BoardSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
  }
`
