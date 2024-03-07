import React, { useState, useEffect } from "react";
import "./style.css";

function Hero() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    if (slideIndex === 3 && n === 1) {
      setSlideIndex(1);
    } else if (slideIndex === 1 && n === -1) {
      setSlideIndex(3);
    } else {
      setSlideIndex(slideIndex + n);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://assets.epuzzle.info/puzzle/075/899/original.webp"
            alt="..."
          />
          <div className="text">
            <button type="button">Leer más</button>
          </div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="https://assets.epuzzle.info/puzzle/075/899/original.webp"
            alt="..."
          />
          <div className="text">
            <button type="button">Leer más</button>
          </div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="https://assets.epuzzle.info/puzzle/075/899/original.webp"
            alt="..."
          />
          <div className="text">
            <button type="button">Leer más</button>
          </div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &lt;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &gt;
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
}

export default Hero;
