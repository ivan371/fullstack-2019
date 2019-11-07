import styled from 'styled-components'

export const FileInput = styled.div<{isDragActive: boolean}>`
  background-color: ${({isDragActive}) => isDragActive ? 'rgb(14, 179, 64, 0.5)' : 'white'};
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  cursor: pointer;
`
