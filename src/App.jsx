import "./App.css";
import MyComponent from "./component/MyComponent";

const App = () => {
  return (
    <>
      <MyComponent isPlaying={isPlaying} />
    </>
  );
};

export default App;
