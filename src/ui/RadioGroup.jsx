export default function RadioGroup({
  name,
  inputLabel,
  options,
  defaultValue,
}) {
  return (
    <div className="control mt-6">
      <label htmlFor={name} className="poppins-light block">
        {inputLabel}
      </label>

      {options.map((opt) => {
        return (
          <div className="flex items-center mt-2" key={opt.value}>
            <input
              type="radio"
              id={opt.value}
              name={name}
              value={opt.value}
              className=" accent-blue-600 w-6 h-6"
              defaultChecked={
                opt.value === defaultValue || opt.checked === true
              } // checked requires onchange event to work properly unlike defaultChecked
            />
            <label className="ml-2 poppins-regular" htmlFor={opt.value}>
              {opt.value}
            </label>
          </div>
        );
      })}
    </div>
  );
}
