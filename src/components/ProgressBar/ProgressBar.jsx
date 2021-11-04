import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { Progress } from "./ProgressBarStyle";

const ProgressBar = ({ files, setFiles }) => {
  const { url, progress } = useStorage(files);

  useEffect(() => {
    if (url) {
      setFiles(null);
    }
  }, [url, setFiles]);

  return <Progress style={{ width: progress + "%" }}></Progress>;
};

export default ProgressBar;
