import styled from 'styled-components'

export const Section = styled.section`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`

export const FormWrapper = styled(Section)`
  display: flex;
  justify-content: space-around;

  form {
    background-color: grey;
    padding: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);

    button {
      border: none;
      outline: none;
      cursor: pointer;
      width: 100%;
    }
  }
`

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  label {
    width: 150px;
  }

  input {
    width: 150px;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  }
`
