import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
    {
      id: 2,
      label: "input",
    },
  ]);

  const handleAddInput = () => {
    const newId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: newId,
        label: "input",
      },
    ]);
  };

  return (
    <div className="">
      {inputs.map((input) => (
        <div key={input.id} className="mb-2">
          <input className="border" type="text" label={input.label} />
        </div>
      ))}
      <div>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
