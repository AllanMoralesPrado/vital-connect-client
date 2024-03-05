import ButtonGroup from "../../componentes/ButtonGroup/ButtonGroup";
import {
  optionsCicloVital,
  optionsMenu,
} from "../../componentes/assets/opciones";

function CicloVital() {
  return (
    <>
      <ButtonGroup options={optionsCicloVital} />
    </>
  );
}

export default CicloVital;
