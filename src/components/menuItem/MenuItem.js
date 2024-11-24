import { Link } from "react-router-dom";

const menuItem = [
  { id: "1", name: "Marketplace", link: "/marketplace" },
  { id: "2", name: "Rankings", link: "/rankings" },
  { id: "3", name: "Connect a wallet", link: "/wallet" },
];

export default function MenuItem({ type }) {
  console.log(type);

  return (
    <ul className={`${type == "header" ? "menu-hearder" : "menu-footer"}`}>
      {menuItem.map((item) => (
        <li className="active" key={item.id}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
