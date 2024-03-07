import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const RegisterWrapper = styled.div`
  background-color: white;
  max-width: 750px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 50px;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const RegisterFormUi = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const RegisterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const RegisterFormInput = styled.input`
  width: 250px;
  height: 25px;
  font-size: 15px;
  border-radius: 6px;
  border-width: 2px;
`;

export const RegisterButton = styled.button`
  height: 30px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #ff6200;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #ff8800;
  }
`;
