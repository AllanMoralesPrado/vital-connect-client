import "./style.css";
function ButtonGroup({ options }) {
  return (
    <>
      <div className="container-button-group">
        <h2>¿Qué exámenes me corresponden?</h2>
        <nav>
          <ul>
            {options.map((option) => (
              <li key={option.id}>{option.content}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ButtonGroup;
