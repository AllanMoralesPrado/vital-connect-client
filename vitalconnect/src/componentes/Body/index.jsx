import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { optionsCicloVital, optionsMenu } from "../assets/opciones";

function Body() {
  return (
    <ButtonGroup
      title={"¿Qué exámenes me corresponden?"}
      options={optionsCicloVital}
    />
  );
}

export default Body;
