export function validateMovementForm({
  amount,
  type,
  description,
  currentBalance,
}) {
  const errors = [];

  if (type === "withdraw" && amount > currentBalance) {
    errors.push("You cannot withdraw higher than your balance");
  }
  if (!amount || isNaN(amount) || amount < 1) {
    errors.push("Please enter a valid amount");
  }
  if (!type) {
    errors.push("Please Select a movement type");
  }
  if (!description || description.trim() === "") {
    errors.push("Please enter a description");
  }
  if (description.trim().length < 2) {
    errors.push("At least 1 character description");
  }
  if (description.trim().length >= 50) {
    errors.push("Description should not exceed 50 characters");
  }

  return errors;
}
