import GoalItem from "./GoalItem";
const GoalList = ({ goals, deleteGoals }) => {
  return (
    <div>
      {goals.map((goalItem) => (
        <div className="goal" key={goalItem.id}>
          <GoalItem goal={goalItem} deleteGoals={deleteGoals} />
        </div>
      ))}
    </div>
  );
};
export default GoalList;
