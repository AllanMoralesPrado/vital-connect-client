const Info = ({ data }) => {
  return (
    <>
      {data.map((vacuna, index) => (
        <div key={index}>
          <h3>{vacuna.vacunaNombre}</h3>
          <p>{vacuna.vacunaDescripcion}</p>
        </div>
      ))}
    </>
  );
};

export default Info;
