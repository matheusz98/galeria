import useFirestore from "../../hooks/useFirestore";
import { GalleryGrid, GalleryContent, Image } from "./GalleryStyle";

const Gallery = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <GalleryGrid>
      {docs &&
        docs.map((doc) => (
          <GalleryContent key={doc.id} onClick={() => setSelectedImg(doc.url)}>
            <Image src={doc.url} alt="Imagem" />
          </GalleryContent>
        ))}
    </GalleryGrid>
  );
};

export default Gallery;
