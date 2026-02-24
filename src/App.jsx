import { useState } from "react";
import "./App.css";
import MyComponent from "./component/MyComponent";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <MyComponent />
    </>
  );
};

export default App;
