import { SlideProps } from "../App";
import Slide from "../components/Slide";

// eslint-disable-next-line no-empty-pattern
export default function TitleSlide({}: SlideProps) {
  return (
    <Slide
      picture="https://cdn.pixabay.com/photo/2015/09/06/11/10/auckland-927242_960_720.jpg"
      forceBackgroundImage
    >
      <h1>Cities in New Zealand</h1>
    </Slide>
  );
}
