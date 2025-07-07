import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PicturesCarousel.module.css";

// Flèche personnalisée droite
const SamplePrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`${styles.arrow} ${styles.prevArrow}`} // Modification ici
    aria-label="Slide précédent"
    type="button"
  >
    &#x21d0; {/* https://www.toptal.com/designers/htmlarrows/ */}
  </button>
);

// Flèche personnalisée droite
const SampleNextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`${styles.arrow} ${styles.nextArrow}`} // Modification ici
    aria-label="Slide suivant"
    type="button"
  >
    &#x21d2; {/* https://www.toptal.com/designers/htmlarrows/ */}
  </button>
);

const PicturesCarousel = () => {
  const settings = {
    dots: true, // Active les points indicateurs de position
    infinite: true, // Permet le défilement en boucle infinie des images
    speed: 500, // Temps entre le début d'un slide et le suivan
    slidesToShow: 1, // Nombre de slides visibles simultanément
    slidesToScroll: 1, // Nombre de slides défilés par interaction
    adaptiveHeight: false, // Désactive l'ajustement auto de la hauteur
    arrows: true, // Active les flèches de navigation
    prevArrow: <SamplePrevArrow onClick={() => {}} />, // Flèche personnalisée gauche
    nextArrow: <SampleNextArrow onClick={() => {}} />, // Flèche personnalisée droite
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 2000, // Intervalle entre slides en auto (2s)
    pauseOnHover: true, // Met en pause le défilement au survol de la souris
  };

  const images = [
    {
      id: 1,
      src: "/images/rouge1.jpg",
      alt: "Rouge DADA Mat",
    },
    {
      id: 2,
      src: "/images/rouge2.jpg",
      alt: "Rouge DADA Brillant",
    },
  ];

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map((image) => ( // Boucle sur le tableau d'images 
          <div key={image.id}> {/* Affiche l'id des images définies dans const images */} 
            <img
              src={image.src} // Chemin de l'image
              alt={image.alt} // Texte alternatif
              className={styles.image} // Styles CSS Module
            />
            <p className={styles.caption}>
              {image.alt} {/* Affiche le texte alternatif des images définies dans const images */} 
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PicturesCarousel;