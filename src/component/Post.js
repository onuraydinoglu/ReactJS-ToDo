import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

function Post({ task }) {
  return (
      <label className="Form-todo-label">
        <span>{task}</span>
        <div className="Form-icon">
          <div className="Form-icon-check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="Form-icon-trash">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </label>
  );
}

export default Post;
