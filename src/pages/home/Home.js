import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Body } from "./homeBody/Body";

export default function Home() {
  return (
    <div className="wrapper">
      <Header type="header" />
      <Body />
      <Footer type="footer" />
    </div>
  );
}
