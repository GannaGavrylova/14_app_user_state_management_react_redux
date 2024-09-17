import { useState } from "react";
import { creator } from "./redux/actions";
import { connect } from "react-redux";

function UserForm({ creatorName }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    creatorName(name, status);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="text"
          value={status}
          placeholder="Status"
          onChange={(e) => setStatus(e.target.value)}
        />
        <button>Change</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    creatorName: (name, status) => dispatch(creator(name, status)), // Передаем данные в экшен
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
