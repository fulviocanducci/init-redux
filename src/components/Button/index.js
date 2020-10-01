import styled from 'styled-components';

export const Button = styled.input.attrs((props) => ({
  type: 'button',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: black;
  background-color: #cacaca;
  border-radius: 5%;
  min-width: 120px;
  height: 35px;
  margin: 50px;
  cursor: pointer;
`;

export default Button;
