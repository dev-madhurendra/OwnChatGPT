import { SetStateAction, useState } from "react";
import "./InputField.css"; 

interface IInputfield {
  onSubmit: (inputvalue: string) => void;
}

const InputField = ({ onSubmit }: IInputfield) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="input-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder="Ask anything...."
          autoFocus
        />
        {inputValue && inputValue.trim() && <button type="submit">Ask</button>}
      </form>
    </div>
  );
};

export default InputField;
