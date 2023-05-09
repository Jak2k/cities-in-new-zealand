import { SlideProps } from "../App";
import CtaButton from "../components/CtaButton";
import List from "../components/List";
import Slide from "../components/Slide";

export default function ToCSlide({ controls }: SlideProps) {
  return (
    <Slide>
      <h2>Quick Overview</h2>
      {controls.isSlideActive && (
        <List
          points={[
            "Auckland",
            "Christchurch",
            "Wellington",
            "Hamilton",
            "Tauranga",
          ]}
        />
      )}
      <CtaButton
        label="Let's start with Auckland"
        onClick={controls.nextSlide}
      />
    </Slide>
  );
}
