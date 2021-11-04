import Title from "./components/Title/Title";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import UploadForm from "./components/UploadForm/UploadForm";
import Gallery from "./components/Gallery/Gallery";

const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title />
        <UploadForm />
        <Gallery />
      </Container>
    </>
  );
};

export default App;
