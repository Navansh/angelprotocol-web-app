import { Route, Routes } from "react-router-dom";
import banner from "assets/images/hero.png";
import Purchase from "./Purchase";

export default function Gift() {
  return (
    <div className="grid">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="relative overlay w-full h-72 bg-center bg-cover"
      />
      <Routes>
        <Route index element={<Purchase classes="my-8 sm:my-20" />} />
      </Routes>
    </div>
  );
}