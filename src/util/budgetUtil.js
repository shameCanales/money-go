export function getTotalDeposit(movements) {
  const deposits = movements.filter(
    (movement) => movement.movementType === "deposit"
  );

  const totalDeposits = deposits.reduce(
    (acc, depositmove) => depositmove.amount + acc,
    0
  );

  return totalDeposits;
}

export function getTotalWithdrawal(movements) {
  const withdrawals = movements.filter(
    (movement) => movement.movementType === "withdraw"
  );

  const totalWithdrawals = withdrawals.reduce(
    (acc, withdrawalMove) => acc + withdrawalMove.amount,
    0
  );

  return totalWithdrawals;
}

export function getCurrentBalance(movements) {
  const totalDeposit = getTotalDeposit(movements);
  const totalWithdrawal = getTotalWithdrawal(movements);
  return totalDeposit - totalWithdrawal;
}
