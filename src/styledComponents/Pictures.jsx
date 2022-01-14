import styled from "styled-components";

const Pictures = styled.img`
  display: flex;
  margin: 2rem;
  src: url(${(props) => props.src});
  width: 100px;
  border: 5px solid ${({ theme }) => theme.imgBorder};
  border-radius: 15px;
`;

export { Pictures };
