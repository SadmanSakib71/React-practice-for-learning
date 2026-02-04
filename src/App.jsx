import { useState } from "react";
import Accordion from "./component/Accordion";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
      <Accordion
        isActive={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
        title="sakib"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        praesentium. Explicabo consequuntur quae iste, voluptates fugiat quos
        distinctio optio vel molestiae obcaecati esse dolorem enim voluptas
        alias quam aliquam magni.
      </Accordion>
      <Accordion
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
        title="Any"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        praesentium. Explicabo consequuntur quae iste, voluptates fugiat quos
        distinctio optio vel molestiae obcaecati esse dolorem enim voluptas
        alias quam aliquam magni.
      </Accordion>
    </div>
  );
}

export default App;
