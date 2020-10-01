import styled from 'styled-components';

const Btn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => props.colorText};
  height: 30px;
  width: 150px;
`;

export default Btn;
