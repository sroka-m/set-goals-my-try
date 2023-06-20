import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [inputGoal, setInputGoal] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputGoal.trim().length === 0) {
      setIsInvalidInput(true);
      return;
    }
    props.getGoal(inputGoal);
    setInputGoal("");
  };

  const handleOnChange = (e) => {
    setInputGoal(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsInvalidInput(false);
    }
    console.log(isInvalidInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal">insert a goal</label>
      </div>
      <div>
        <input
          className={isInvalidInput ? "invalid" : ""}
          type="text"
          name="goal"
          id="goal"
          value={inputGoal}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default Form;
