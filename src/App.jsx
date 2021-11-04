import Title from "./components/Title/Title";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import UploadForm from "./components/UploadForm/UploadForm";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title />
        <UploadForm />
        <Gallery setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Container>
    </>
  );
};

export default App;
