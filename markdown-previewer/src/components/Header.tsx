import styled from "styled-components";

export function Header() {
    const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  margin-top: 1em;
`;

    return (
        <Title>Markdown Editor</Title>
    );
}