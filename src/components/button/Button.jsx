import BeatLoader from "react-spinners/BeatLoader";

export default function Button({ type, onClick, text, className, disabled }) {
  return (
    <button
      type={type}
      className={`w-full h-[53px] rounded text-[#333333] text-base font-normal ${
        disabled
          ? 'bg-[#b8b8b8] text-[#333333] cursor-not-allowed'
          : 'bg-[#b8b8b8] text-[#333333]'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? <BeatLoader color="#333333" /> : text}
    </button>
  );
}
