import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Marketplace from "./pages/marketplace/Marketplace";
import Rankings from "./pages/rankings/Rankings";
import Wallet from "./pages/wallet/Wallet";
import User from "./pages/user/User";
import ArtistPage from "./pages/artistPage/ArtistPage";
import NFTPage from "./pages/nftPage/NFTPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/user" element={<User />} />
        <Route path="/artist-page" element={<ArtistPage />} />
        <Route path="/nft-page" element={<NFTPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
