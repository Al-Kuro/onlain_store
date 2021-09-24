import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return <Row></Row>;
});

export default DeviceList;
