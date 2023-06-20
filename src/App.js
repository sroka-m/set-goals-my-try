import "./App.css";
import Form from "./Form";
import Goal from "./Goal";
import { useState } from "react";

function App() {
  const goalList = [
    { text: "finish this app", id: "g1" },
    { text: "finish styling chapter", id: "g2" },
    { text: "complete ch8 debugging", id: "g3" },
    { text: "complete ch9 project", id: "g4" },
  ];
  let [goals, setGoals] = useState(goalList);

  const deleteGoals = (id) => {
    setGoals((prevVal) => {
      let upatedGoals = prevVal.filter((goal) => goal.id !== id);
      return upatedGoals;
    });
  };
  const getGoal = (goal) => {
    console.log(goal);
    setGoals((prevState) => {
      return [{ text: goal, id: Math.random().toString() }, ...prevState];
    });
    console.log(goals);
  };
  let content = (
    <div>
      {goals.map((goalItem) => (
        <div className="goal" key={goalItem.id}>
          <Goal goal={goalItem} deleteGoals={deleteGoals} />
        </div>
      ))}
    </div>
  );
  if (goals.length === 0) {
    content = (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
    );
  }
  return (
    <div>
      <div className="goalForm">
        <Form getGoal={getGoal} />
      </div>
      {content}
    </div>
  );
}

export default App;
