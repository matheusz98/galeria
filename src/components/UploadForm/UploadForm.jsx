import { useState } from "react";
import { Form, Input, Output, Error, FileName } from "./UploadFormStyle";

const UploadForm = () => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/jpg", "image/png", "image/jpeg", "image/gif"];

  const handleUpload = (e) => {
    let selectedFiles = e.target.files[0];

    if (selectedFiles && types.includes(selectedFiles.type)) {
      setFiles(selectedFiles);
      setError("");
    } else {
      setFiles(null);
      setError("Favor inserir um arquivo em formato de imagem.");
    }
  };

  return (
    <Form>
      <Input type="file" onChange={handleUpload} />
      <Output>
        {error && <Error>{error}</Error>}
        {files && <FileName>{files.name}</FileName>}
      </Output>
    </Form>
  );
};

export default UploadForm;
