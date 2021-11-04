import useFirestore from "../../hooks/useFirestore";
import { GalleryGrid, GalleryContent, Image } from "./GalleryStyle";

const Gallery = () => {
  const { docs } = useFirestore("images");

  return (
    <GalleryGrid>
      {docs &&
        docs.map((doc) => (
          <GalleryContent key={doc.id}>
            <Image src={doc.url} alt="Image" />
          </GalleryContent>
        ))}
    </GalleryGrid>
  );
};

export default Gallery;
