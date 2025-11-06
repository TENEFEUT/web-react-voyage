import { useState } from "react";
import Destinations from "./Destinations";
import Bus from "./Bus";
import Trajets from "./Trajets";
import Reservations from "./Reservations";
import "./Dashboard.css";

export default function Dashboard() {
  const [tab, setTab] = useState("destinations");

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin</h2>
        <button
          className={tab === "destinations" ? "active" : ""}
          onClick={() => setTab("destinations")}
        >
          Destinations
        </button>
        <button
          className={tab === "bus" ? "active" : ""}
          onClick={() => setTab("bus")}
        >
          Bus
        </button>
        <button
          className={tab === "trajets" ? "active" : ""}
          onClick={() => setTab("trajets")}
        >
          Trajets
        </button>
        <button
          className={tab === "reservations" ? "active" : ""}
          onClick={() => setTab("reservations")}
        >
          Réservations
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="admin-content">
        {tab === "destinations" && <Destinations />}
        {tab === "bus" && <Bus />}
        {tab === "trajets" && <Trajets />}
        {tab === "reservations" && <Reservations />}
      </main>
    </div>
  );
}
