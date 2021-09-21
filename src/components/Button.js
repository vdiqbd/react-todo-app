const Button = (props) => {
  const checkInput = () => {
    if (document.getElementById("input").value) {
      props.addTask();
    }
  };

  return (
    <div>
      <button
        className={props.className}
        onClick={
          props.className === "add-task-btn" ? checkInput : props.clearTask
        }
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
