export default function Modal({ children, isOpen }) {
  let modalBackdrop = isOpen
    ? "h-screen flex items-center justify-center fixed inset-0 bg-black/50 z-40 backdrop-blur-xs"
    : "";

  return (
    <div className={modalBackdrop}>
      <dialog
        open={isOpen}
        className="rounded-3xl max-w-sm  border-stone-900 w-[90%] m-auto p-8 "
      >
        <div>{children}</div>
      </dialog>
    </div>
  );
}
