import { useEffect, useState, useRef, useCallback } from "react";
import { Image } from "../../interface/Image";
import "./Carousel.css";

function Carousel({ images }: { images: Image[] }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef<number | null>(null);

  // Use useCallback para evitar recriação da função em cada renderização
  const slideRight = useCallback(() => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }, [current, images.length]);

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    if (autoPlay) {
      timeOutRef.current = window.setTimeout(() => {
        slideRight();
      }, 2500);
    }

    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, [autoPlay, slideRight]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        if (timeOutRef.current) {
          clearTimeout(timeOutRef.current);
        }
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
