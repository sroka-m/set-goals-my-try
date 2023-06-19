const Goal = (props) => {
  console.log(props.goal.id);

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

export default Goal;
