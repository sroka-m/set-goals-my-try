import "./App.css";
import Form from "./Form";
import Goal from "./Goal";
import { useState } from "react";

function App() {
  const goalList = [
    { text: "finish this app", id: Math.random() },
    { text: "finish styling chapter", id: Math.random() },
    { text: "complete ch8 debugging", id: Math.random() },
    { text: "complete ch9 project", id: Math.random() },
  ];
  let [goals, setGoals] = useState(goalList);

  const deleteGoals = (id) => {
    let newGoals = goals.filter((goal) => {
      return goal.id !== id;
    });
    setGoals(newGoals);
  };
  const getGoal = (goal) => {
    console.log("insde geG in App.ja");
    console.log(goal);
    setGoals((prevState) => {
      return [{ text: goal, id: Math.random() }, ...prevState];
    });
    console.log(goals);
  };
  return (
    <div>
      <div className="goalForm">
        <Form getGoal={getGoal} />
      </div>
      <div>
        {goals.map((goalItem) => (
          <div className="goal">
            <Goal key={goalItem.id} goal={goalItem} deleteGoals={deleteGoals} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
