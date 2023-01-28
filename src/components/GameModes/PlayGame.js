import Modal from "../PageComponents/Modal.js";
import React, { useState } from "react";

export default function PlayGame({ pokemon } = { pokemon: "pichu" }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative", zIndex: 0, marginTop: "5px" }}>
      <button
        className="modalBtn"
        onClick={() => setShow(true)}
      >
        Cuidar Pokemon
      </button>
      <Modal pokemon={pokemon} open={show} onClose={() => setShow(false)} class="button" />
    </div>
  );
}
