import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Christchurch({ controls }: SlideProps) {
  return (
    <Slide picture="https://upload.wikimedia.org/wikipedia/commons/2/28/New_Regent_St_Christchurch._%2810588849634%29.jpg">
      <h2>Christchurch</h2>
      <p>Christchurch is the largest city in the south of New Zealand</p>
      <List
        points={[
          "Most known for: English heritage, gardens, parks, beaches, mountains, rivers",
          "Population: 389 thousand",
          "Area: 1,426 km²",
          "Island: South Island",
          "Landmarks: Christchurch Cathedral, Canterbury Museum, Botanic Gardens, Hagley Park, Avon River",
          "Economy: agriculture, tourism, manufacturing, education, technology",
        ]}
      />
    </Slide>
  );
}
