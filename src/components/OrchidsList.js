import React, { useState } from "react";
import ListOfOrchids from "../data/ListOfOrchids";
import OrchidsCard from "./OrchidsCard";
import OrchidDetailModal from "./OrchidDetailModal";
import "../Orchids.css";

export default function OrchidsList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleShowDetail = (orchid) => {
    setSelectedOrchid(orchid);
    setShowModal(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        🌸 Orchid Collection 🌸
      </h1>

      <div className="orchid-grid">
        {ListOfOrchids.map((orchid) => (
          <OrchidsCard
            key={orchid.id}
            orchid={orchid}
            onDetail={() => handleShowDetail(orchid)}
          />
        ))}
      </div>

      <OrchidDetailModal
        show={showModal}
        orchid={selectedOrchid}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
