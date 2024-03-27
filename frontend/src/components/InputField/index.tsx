import { SetStateAction, useState } from "react";

interface IInputfield {
    onSubmit: (inputvalue: string) => void
}

const InputField = ({ onSubmit }: IInputfield) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
        autoFocus
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default InputField;
