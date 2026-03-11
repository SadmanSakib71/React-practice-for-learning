import "./App.css";
import Form from "./component/Form";
import SaveButton from "./component/SaveButton";
import StatusBar from "./component/StatusBar";

const App = () => {
  return (
    <>
      <StatusBar />
      <SaveButton />
      <br />
      <Form />
    </>
  );
};

export default App;
