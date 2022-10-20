import Nav from "./Nav";
import Views from "./Views";

export default function Core() {
  return (
    <div className="padded-container grid grid-rows-[auto_1fr] pb-8 pt-28 gap-2">
      <Nav />
      <Views />
    </div>
  );
}
