import React, { useContext } from "react";
import Context from "../context/Context";

function Footer() {
  const { lightMode } = useContext(Context);
  return (
    <footer className={lightMode}>
      <p>
        {"Created By "}
        <a
          target="_black"
          href="https://www.linkedin.com/in/celso-rodrigo-monteiro/"
        >
          Celso Rodrigo
        </a>
      </p>
    </footer>
  );
}

export default Footer;
