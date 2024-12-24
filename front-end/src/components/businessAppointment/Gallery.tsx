import styles from "./Gallery.module.scss";

interface GalleryProps {
    imageUrls: string[];
}

const Gallery = ({ imageUrls }: GalleryProps ) => {
  return (
    <div className={styles.gallery}>
      {imageUrls.map((image) => (
        <img
          key={image}
          src={image}
          alt={`Gallery image ${image + 1}`}
          className={styles.gallery}
        />
      ))}
    </div>
  );
};

export default Gallery;
