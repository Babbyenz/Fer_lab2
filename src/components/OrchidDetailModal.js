import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function OrchidDetailModal({ show, orchid, onClose }) {
  if (!orchid) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{orchid.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={orchid.image}
          alt={orchid.name}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
        />

        <p>
          <b>Id: </b> {orchid.id}
        </p>
        <p>
          <b>Origin:</b> {orchid.origin}
        </p>
        <p>
          <b>Color:</b> {orchid.color}
        </p>
        <p>
          <b>Category:</b> {orchid.category}
        </p>
        <p>
          <b>Rating:</b> {"⭐".repeat(orchid.rating)}
        </p>
        {orchid.isSpecial && <p className="special">🌟 Special Orchid 🌟</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
