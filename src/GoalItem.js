const GoalItem = (props) => {
  return (
    <div>
      <p>{props.goal.text}</p>
      <button
        onClick={() => {
          props.deleteGoals(props.goal.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default GoalItem;
