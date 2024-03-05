import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { optionsCicloVital, optionsMenu } from "../assets/opciones";

function CicloVital({ servicio }) {
  return (
    <ButtonGroup
      title={"¿Qué " + { servicio } + " me corresponden?"}
      options={optionsCicloVital}
    />
  );
}

export default CicloVital;
