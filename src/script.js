const HOURLY_RATE = 25;

document.getElementById('payroll-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const regularHours = Number(document.getElementById('regular-hours').value);
  const overtimeHours = Number(document.getElementById('overtime-hours').value);
  const holidayHours = Number(document.getElementById('holiday-hours').value);
  const yearsOfService = Number(document.getElementById('years-of-service').value);
  const healthPlanTier = Number(document.getElementById('health-tier').value);

  console.log(`[SYSTEM_INFO] -> --- New Calculation Cycle Started ---`);

  const baseRegularEarnings = regularHours * HOURLY_RATE;
  const baseOvertimeEarnings = overtimeHours * (HOURLY_RATE * 1.5);
  const baseHolidayEarnings = holidayHours * (HOURLY_RATE * 2.5);

  let totalSalary = baseRegularEarnings + baseOvertimeEarnings + baseHolidayEarnings;
  console.log(`[SYSTEM_INFO] -> Gross hours calculation: Reg=$${baseRegularEarnings}, OT=$${baseOvertimeEarnings}, Hol=$${baseHolidayEarnings}`);
  console.log(`[SYSTEM_INFO] -> Total hours accumulated gross: $${totalSalary}`);

  if (yearsOfService >= 5) {
    console.log(`[SYSTEM_BONUS] -> Veteran bonus milestone hit (5+ years). Adding $100.`);
    totalSalary = totalSalary + 100;
  } else if (yearsOfService >= 2) {
    console.log(`[SYSTEM_BONUS] -> Standard bonus milestone hit (2+ years). Adding $40.`);
    totalSalary = totalSalary + 40;
  }

  let insuranceCost = 0;
  switch (healthPlanTier) {
    case 1:
      insuranceCost = 30;
      break;
    case 2:
      insuranceCost = 60;
      break;
    case 3:
      insuranceCost = 90;
      break;
    default:
      insuranceCost = 0;
  }
  totalSalary = totalSalary - insuranceCost;
  console.log(`[SYSTEM_DEDUCTION] -> Health Plan Tier ${healthPlanTier} cost deducted: -$${insuranceCost}`);

  let finalTax = 0;
  if (totalSalary > 1000) {
    finalTax = totalSalary * 0.25;
  } else if (totalSalary > 600) {
    finalTax = totalSalary * 0.18;
  } else {
    finalTax = totalSalary * 0.10;
  }
  console.log(`[SYSTEM_DEDUCTION] -> Tax application completed: -$${finalTax}`);

  const netPay = totalSalary - finalTax;
  console.log(`[SYSTEM_SUCCESS] -> Calculation cycle finished. Net result: $${netPay}`);

  document.getElementById('net-pay-display').innerText = '$' + netPay.toFixed(2);
});