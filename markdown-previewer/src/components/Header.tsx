import styled from "styled-components";
import { useState } from "react";
import ReactModal from "react-modal";
import { MarkdownGuide } from "./MarkdownGuide";

export function Header() {
  const [isShowGuide, setIsShowGuide] = useState(false);

  const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
    margin-top: 1em;
  `;

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
    },
  };

  const TitleContainer = styled.div`
    display: flex;
    flex: row;
    align-items: center;
  `;

  return (
    <div>
      <TitleContainer>
        <Title>Markdown Editor</Title>
        <button
          style={{ height: "30%", marginLeft: "15px" }}
          onClick={() => setIsShowGuide(!isShowGuide)}
        >
          Guide
        </button>
      </TitleContainer>

      <ReactModal
        isOpen={isShowGuide}
        style={customStyles}
        onRequestClose={() => setIsShowGuide(false)}
        shouldCloseOnOverlayClick={true}
      >
        <MarkdownGuide />
      </ReactModal>
    </div>
  );
}
