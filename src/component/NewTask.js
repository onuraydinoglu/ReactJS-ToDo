import { useState } from "react";

import "./NewTask.css";

function NewTask({ onAddPost }) {
  const [enteredTask, setEnteredTask] = useState("");

  function taskChangeHandle(event) {
    setEnteredTask(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      task: enteredTask,
    };
    onAddPost(postData);
    setEnteredTask(''); 
  }

  return (
    <>
      <form className="Form-group" onSubmit={submitHandler}>
        <input
          type="text"
          className="Form"
          placeholder="ADD A NEW TASK"
          onChange={taskChangeHandle}
          value={enteredTask}
        ></input>
        <button type="submit" className="Btn-submit">
          Submit
        </button>
      </form>
      <hr></hr>
    </>
  );
}

export default NewTask;
