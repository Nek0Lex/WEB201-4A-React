import styled from "styled-components";

function Header(onToggleGuide: any) {
    let StyleHeader = styled.h1``;
  
    return (
      <>
        <StyleHeader onClick={() => onToggleGuide} />
      </>
    );
  }

export default function HeaderContainer() {
  return (
    <Header/>
  );
}
