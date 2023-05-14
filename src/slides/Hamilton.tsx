import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Hamilton({ controls }: SlideProps) {
  return (
    <Slide picture="https://live.staticflickr.com/2757/4069294660_d42df8d204_b.jpg">
      <h2>Hamilton</h2>
      <p>Hamilton is the most populous city in the Waikato region.</p>
      <List
        points={[
          "Most known for: Hamilton Gardens, Waikato River, Hobbiton Movie Set",
          "Population: 179.9 thousand",
          "Area: 110 km²",
          "Island: North Island",
          "Landmarks: Waikato Museum, Hamilton Gardens, Waikato Stadium, Claudelands Event Centre",
          "Economy: agriculture, education, research, healthcare, manufacturing",
        ]}
      />
    </Slide>
  );
}
