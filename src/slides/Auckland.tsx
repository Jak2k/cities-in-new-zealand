import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Auckland({ controls }: SlideProps) {
  return (
    <Slide picture="https://upload.wikimedia.org/wikipedia/commons/5/54/Auckland_CBD_skyline_and_harbour.jpg">
      <h2>Auckland</h2>
      <p>
        Auckland is a large metropolitan city in the North Island of New
        Zealand.
      </p>
      <List
        points={[
          "Most known for: beaches, warm climate, kiwifruit, port",
          "Population: 1,4 million",
          "Area: 1,086 km²",
          "Island: North Island",
          "Settled by Europeans: 1840",
          "Geographic features: 2 harbours, 48 volcanoes, 2 mountain ranges, 2 rivers",
          "Landmarks: Sky Tower, Auckland Harbour Bridge, Auckland War Memorial Museum",
          "Economy: technology sector, tourism industry, education, innovation",
        ]}
      />
    </Slide>
  );
}
