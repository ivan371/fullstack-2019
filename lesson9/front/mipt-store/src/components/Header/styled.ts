import styled from 'styled-components'

export const HeaderItem = styled.div`
  background-color: #5495df;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  @media screen and (max-width: 800px) {
    width: 100%;
    box-shadow: none;
    text-align: center;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    a {
      max-width: 100%;
      margin: 5px;
    }

    ${HeaderItem} + ${HeaderItem} {
      margin-top: 5px;
    }
  }
  
`

export const LogoutButton = styled.a`
  cursor: pointer;
`
