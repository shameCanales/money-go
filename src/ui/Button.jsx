export default function Button({ children, type, handleClick }) {
  const special =
    "bg-stone-900 text-xs text-stone-100 px-8 py-2 rounded-3xl montserrat-medium";
  const normal =
    "border-2 border-stone-900 text-xs text-stone-900 px-6 py-2 rounded-3xl montserrat-medium";

  return (
    <button
      className={type === "special" ? special : normal}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
