import { creator } from "./redux/actions";
import { connect } from "react-redux";
function User({ name, status }) {
  return (
    <div>
      <h1>User name {name}</h1>
      <h3>Status: {status}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};
export default connect(mapStateToProps)(User);
