import "./style.css";
const ButtonGroup = ({ title, options }) => {
  return (
    <>
      <h2>{title}</h2>
      <nav>
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.content}</li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ButtonGroup;
