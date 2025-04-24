export function getDate() {
  const dateToday = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateToday;
}

export function getCurentTime() {
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return time;
}



export function generateId() {
  return Math.floor(10000000 + Math.random() * 90000000);
}

export function formatToCurrency(amount) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(amount);

  return formattedAmount;
}

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
