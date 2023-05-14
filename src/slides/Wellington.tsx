import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Wellington({ controls }: SlideProps) {
  return (
    <Slide picture="https://upload.wikimedia.org/wikipedia/commons/c/cb/Wellington_city_with_Cable_Car.jpg">
      <h2>Wellington</h2>
      <p>
        Wellington is the capital city of New Zealand and the second most
        populous urban area in New Zealand.
      </p>
      <List
        points={[
          "Most known for: windy weather, harbour views, cable car, Te Papa Museum",
          "Population: 1,4 million",
          "Area: 444 km²",
          "Island: North Island",
          "Landmarks: Te Papa Museum, Beehive and Parliament Buildings, Mount Victoria Lookout, Wellington Cable Car",
          "Economy: government, technology, tourism, film production, creative industries",
        ]}
      />
    </Slide>
  );
}
