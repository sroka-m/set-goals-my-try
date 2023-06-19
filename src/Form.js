import { useState } from "react";

const Form = (props) => {
  const [inputGoal, setInputGoal] = useState("");
  console.log(inputGoal);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getGoal(inputGoal);
    setInputGoal("");
  };
  const handleOnChange = (e) => {
    setInputGoal(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal">insert a goal</label>
      </div>
      <div>
        <input
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
