import { Link } from "react-router-dom";
import avatar from "../../data/avatar";

export default function CreatorCard({ type }) {
  return (
    <div
      className={`${
        type == "pc"
          ? "body-block body-row-ceator"
          : "body-block body-column-creator"
      }`}
    >
      {avatar.map((item) => (
        <Link to="./rankings" className="creator-card">
          <span>{item.id}</span>
          <img src={item.image} alt="Avartar" />
          <div className="info-card">
            <h3>{item.name}</h3>
            <p>
              <span>Total Sales:</span>
              <span>34.53 ETH</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
