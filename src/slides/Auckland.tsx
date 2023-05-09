import { SlideProps } from "../App";
import List from "../components/List";
import Slide from "../components/Slide";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Auckland({ controls }: SlideProps) {
  return (
    <Slide>
      <h2>Auckland</h2>
      <p>
        Auckland is a large metropolitan city in the North Island of New
        Zealand.
      </p>
      <List
        points={[
          "Population: 1,440,300",
          "Island: North Island",
          "Settled by Europeans: 1840",
        ]}
      />
    </Slide>
  );
}
