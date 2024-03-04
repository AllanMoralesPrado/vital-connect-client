import "./style.css";
const ButtonGroup = ({ title, options }) => {
  return (
    <>
      <div className="container-button-group">
        <h2>{title}</h2>
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
};

export default ButtonGroup;
