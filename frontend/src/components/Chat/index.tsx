import axios from "axios";
import InputField from "../InputField";
import { useState } from "react";
import "./Chat.css";

interface IQnA {
  prompt: string;
  prompt_answer: string;
}

const Chat = () => {
  const [promptArr, setPromptArr] = useState<IQnA[]>([]);

  const get_chat_ans = async (value: string) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/v1/chat", {
        body: value,
      });
      const newPromptArr = [
        ...promptArr,
        {
          prompt: value,
          prompt_answer: res.data.prompt_answer,
        },
      ];
      setPromptArr(newPromptArr);
      console.log(">>> ", newPromptArr);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="prompt-list">
        {promptArr.map((ele: IQnA, index: number) => (
          <div className="prompt-item" key={index}>
            <p className="prompt">{ele.prompt}</p>{" "}
            <p className="prompt-answer">{ele.prompt_answer}</p>{" "}
          </div>
        ))}
      </div>
      <InputField onSubmit={value => get_chat_ans(value)} />
    </div>
  );
};

export default Chat;
