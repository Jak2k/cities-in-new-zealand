import { SlideProps } from "../App";
import CtaButton from "../components/CtaButton";
import Slide from "../components/Slide";

export default function TitleSlide({ controls }: SlideProps) {
  return (
    <Slide>
      <h1>Cities in New Zealand</h1>
      <CtaButton label="Start" onClick={controls.nextSlide} />
    </Slide>
  );
}
