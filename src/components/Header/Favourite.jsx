import HeartIconNormal from "../../assets/heart.svg";

export default function Favourtie({ onShowModal }) {
  return (
    <div
      onClick={onShowModal}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={HeartIconNormal} alt="hearticon" />
      <span>Favourite Locations</span>
    </div>
  );
}
