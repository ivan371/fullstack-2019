import styled from 'styled-components'

export const BoardItem = styled.div`
  width: 140px;
  height: 180px;
  background-color: grey;
  margin-bottom: 10px;
  padding: 5px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    cursor: pointer;
  }

  img {
    width: 140px;
    height: 140px;
    margin-bottom: 5px;
  }
`

export const Price = styled.div`
  font-size: 10px;
`

export const Title = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
