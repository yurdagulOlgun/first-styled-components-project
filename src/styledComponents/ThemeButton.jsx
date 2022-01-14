import styled from "styled-components";
const ThemeButton = styled.button`
  margin-left: 2rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 15px;
  color: ${({ theme }) => theme.color};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
export { ThemeButton };
