import "./Form.css";

function Form({ onSubmit, children }) {
  return (
    <div className="form-div">
      <form className="form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default Form;
