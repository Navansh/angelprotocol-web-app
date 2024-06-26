import List from "./List";

export default function Members() {
  return (
    <div className="grid content-start gap-y-6 @lg:gap-y-8 @container">
      <h3 className="text-[2rem]">Manage Members</h3>
      <List />
    </div>
  );
}
