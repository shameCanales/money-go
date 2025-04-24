import RadioBtn from "./RadioBtn";

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
          <RadioBtn
            key={opt.value}
            idValue={opt.value}
            name={name}
            defaultValue={defaultValue}
          />
        );
      })}
    </div>
  );
}
