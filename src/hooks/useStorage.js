import { useState, useEffect } from "react";
import { projectStorage } from "../services/Firebase";

// Hook para armazenar fotos
export const useStorage = (file) => {
  // Barra de progresso do envio
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // Cálculo de porcentagem
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
