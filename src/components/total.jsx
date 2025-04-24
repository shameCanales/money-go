export default function Total({ name, amount }) {
  return (
    <div >
      <p className="poppins-regular text-sm">{name} :</p>
      <h3 className="poppins-bold mt-1 text-xl" >{amount}</h3>
    </div>
  );
}
