import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Tauranga({ controls }: SlideProps) {
  return (
    <Slide picture="https://upload.wikimedia.org/wikipedia/commons/e/e4/Walking_up_Mount_Maunganui_09_%285645002843%29.jpg">
      <h2>Tauranga</h2>
      <p>Tauranga is the most populous city in the Bay of Plenty region.</p>
      <List
        points={[
          "Most known for: beaches, warm climate, kiwifruit, port",
          "Population: 158.3 thousand",
          "Area: 141.91 km²",
          "Island: North Island",
          "Landmarks: Mount Maunganui, Tauranga Harbour, Bayfair Shopping Centre, Te Puna Quarry Park",
          "Economy: port activity, tourism, horticulture, manufacturing, service industries",
        ]}
      />
    </Slide>
  );
}
