import { SlideProps } from "../App";
import Slide from "../components/Slide";

export default function TitleSlide({ controls }: SlideProps) {
  return (
    <Slide>
      <h1>Cities in New Zealand</h1>
      <button className="cta" onClick={controls.nextSlide}>
        Start
      </button>
    </Slide>
  );
}
