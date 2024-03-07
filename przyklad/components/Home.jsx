import Helmet from "react-helmet";
import ReactDOM from "react-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
function Modal({ txt }) {
  return (
    <div>
      {ReactDOM.createPortal(<p>{txt}</p>, document.getElementById("portal"))}
    </div>
  );
}

const ButtonMy = styled(Button)`
  background-color: red !important;
`;

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Button onClick={() => setShow((p) => !p)} variant="outlined">
        Contained
      </Button>
      <ButtonMy>lorem</ButtonMy>
      <button onClick={() => setShow((p) => !p)}>Show</button>
      {show && <Modal txt="lorem" />}
      <h1>Home Page</h1>
    </>
  );
}
