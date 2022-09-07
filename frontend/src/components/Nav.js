import React from "react";

export default function Nav() {
  return (
    <div className="Nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a
            className="nav-link"
            href="http://localhost:8000/admin/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Admin
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="http://localhost:8000/api/"
            rel="noopener noreferrer"
            target="_blank"
          >
            API
          </a>
        </li>
      </ul>
    </div>
  );
}
