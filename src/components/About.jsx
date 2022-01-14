import styled from "styled-components";
const Notes = styled.div`
  margin: 5rem;
  width: 380px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  border-left: 6px solid ${({ theme }) => theme.imgBorder};
  color: ${({ theme }) => theme.color};
`;

const Strong = styled.strong`
  display: flex;
`;

const About = (props) => {
  return (
    <>
      <Notes>
        In this project, I exercised <Strong> styled-components.</Strong>
      </Notes>
    </>
  );
};
export default About;
