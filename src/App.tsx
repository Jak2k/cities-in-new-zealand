import { useEffect, useState } from "react";
import TitleSlide from "./slides/Title";
import ToCSlide from "./slides/ToC";
import Auckland from "./slides/Auckland";
import Christchurch from "./slides/Christchurch";
import Wellington from "./slides/Wellington";
import Hamilton from "./slides/Hamilton";
import Tauranga from "./slides/Tauranga";

type Controls = {
  nextSlide: () => void;
  previousSlide: () => void;
  goToSlide: (index: number) => void;
  getSlideIndex: () => number;
  getSlideCount: () => number;
  isSlideActive: boolean;
};

export type SlideProps = {
  controls: Controls;
};

type Slide = (props: SlideProps) => JSX.Element;

const slides: Slide[] = [
  TitleSlide,
  ToCSlide,
  Auckland,
  Christchurch,
  Wellington,
  Hamilton,
  Tauranga,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setIsFullScreen(!!document.fullscreenElement);
    });
  }, [currentSlide]);

  return (
    <>
      {slides.map((Slide, index) =>
        currentSlide === index ? (
          <Slide
            key={index}
            controls={{
              nextSlide: () => {
                console.log("nextSlide");
                setCurrentSlide((currentSlide) => currentSlide + 1);
              },
              previousSlide: () => {
                console.log("previousSlide");
                setCurrentSlide((currentSlide) => currentSlide - 1);
              },
              goToSlide: (index) => {
                console.log("goToSlide", index);
                setCurrentSlide(index);
              },
              getSlideIndex: () => 0,
              getSlideCount: () => 0,
              isSlideActive: currentSlide === index,
            }}
          />
        ) : null
      )}

      <div className="controls">
        <button
          disabled={currentSlide === 0}
          onClick={() => {
            console.log("previousSlide");
            setCurrentSlide((currentSlide) => currentSlide - 1);
          }}
        >
          Previous
        </button>
        <button
          disabled={currentSlide === slides.length - 1}
          onClick={() => {
            console.log("nextSlide");
            setCurrentSlide((currentSlide) => currentSlide + 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            console.log("toggleFullScreen");
            if (isFullScreen) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }}
        >
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </div>
    </>
  );
}

export default App;
