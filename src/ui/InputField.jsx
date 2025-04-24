export default function InputField({
  label,
  id,
  name,
  type = "text",
  ...props
}) {
  return (
    <div className="control mt-6">
      <label htmlFor={id} className="block poppins-light ">
        {label}
      </label>
      <input
        className="poppins-medium border-1 rounded-md mt-3  p-4 pl-4 w-full border-stone-900"
        type={type}
        name={name}
        id={id}
        {...props}
      />
    </div>
  );
}
