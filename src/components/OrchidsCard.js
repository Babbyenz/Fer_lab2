import React from "react";
import { Button } from "react-bootstrap";

export default function OrchidsCard({ orchid, onDetail }) {
  return (
    <div className="orchid-card">
      <img src={orchid.image} alt={orchid.name} className="orchid-img" />
      <h3>{orchid.name}</h3>

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

      <Button variant="primary" size="sm" onClick={onDetail}>
        Detail
      </Button>
    </div>
  );
}
