export default function RadioBtn({ idValue, name, defaultValue }) {

  return (
    <div className="flex items-center mt-2">
      <input
        type="radio"
        id={idValue}
        name={name}
        value={idValue}
        className=" accent-blue-600 w-6 h-6"
        // checked={idValue === defaultValue} // checked requires onchange event to work properly unlike defaultChecked
        defaultChecked={idValue === defaultValue} // checked requires onchange event to work properly unlike defaultChecked
      />
      <label className="ml-2 poppins-regular" htmlFor={idValue}>
        {idValue}
      </label>
    </div>
  );
}
