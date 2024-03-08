import ButtonGroup from "../../componentes/ButtonGroup/ButtonGroup";
import { optionsCicloVital } from "../../componentes/assets/opciones";

function CicloVital({ serviceName }) {
  return (
    <>
      <ButtonGroup options={optionsCicloVital} serviceName={serviceName} />
    </>
  );
}

export default CicloVital;
