const HOURLY_RATE = 25;

function systemLogger(level, message) {
  console.log(`[SYSTEM_${level}] -> ${message}`);
}

/**
 * Calculates standard pay based on regular hours only.
 */
function calculateRegularPay(hours, rate) {
  return hours * rate;
}

/**
 * Calculates overtime pay with a mandatory 1.5x multiplier.
 */
function calculateOvertimePay(hours, rate) {
  return hours * (rate * 1.5);
}

/**
 * Calculates holiday pay with a premium 2.5x multiplier.
 */
function calculateHolidayPay(hours, rate) {
  return hours * (rate * 2.5);
}

/**
 * Analyzes career seniority years to award scalable loyalty bonuses.
 */
function applySeniorityBonus(currentPay, years) {
  if (years >= 5) {
    systemLogger('BONUS', 'Veteran bonus milestone hit (5+ years). Adding $100.');
    return currentPay + 100;
  } else if (years >= 2) {
    systemLogger('BONUS', 'Standard bonus milestone hit (2+ years). Adding $40.');
    return currentPay + 40;
  }
  return currentPay;
}

/**
 * Determines automated insurance deductions based on specific tier inputs.
 */
function calculateInsuranceDeduction(tier) {
  switch (tier) {
    case 1:
      return 30;
    case 2:
      return 60;
    case 3:
      return 90;
    default:
      return 0;
  }
}

/**
 * Runs a progressive tax calculation model based on the generated revenue.
 */
function calculateTaxAmount(taxableIncome) {
  if (taxableIncome > 1000) {
    return taxableIncome * 0.25;
  }
  if (taxableIncome > 600) {
    return taxableIncome * 0.18;
  }
  return taxableIncome * 0.10;
}

document.getElementById('payroll-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const regularHours = Number(document.getElementById('regular-hours').value);
  const overtimeHours = Number(document.getElementById('overtime-hours').value);
  const holidayHours = Number(document.getElementById('holiday-hours').value);
  const yearsOfService = Number(document.getElementById('years-of-service').value);
  const healthPlanTier = Number(document.getElementById('health-tier').value);

  systemLogger('INFO', '--- New Calculation Cycle Started ---');

  const baseRegularEarnings = calculateRegularPay(regularHours, HOURLY_RATE);
  const baseOvertimeEarnings = calculateOvertimePay(overtimeHours, HOURLY_RATE);
  const baseHolidayEarnings = calculateHolidayPay(holidayHours, HOURLY_RATE);

  let totalSalary = baseRegularEarnings + baseOvertimeEarnings + baseHolidayEarnings;
  systemLogger('INFO', 'Gross hours calculation: Reg=$' + baseRegularEarnings + ', OT=$' + baseOvertimeEarnings + ', Hol=$' + baseHolidayEarnings);
  systemLogger('INFO', 'Total hours accumulated gross: $' + totalSalary);

  totalSalary = applySeniorityBonus(totalSalary, yearsOfService);

  const insuranceCost = calculateInsuranceDeduction(healthPlanTier);
  totalSalary = totalSalary - insuranceCost;
  systemLogger('DEDUCTION', 'Health Plan Tier ' + healthPlanTier + ' cost deducted: -$' + insuranceCost);

  const finalTax = calculateTaxAmount(totalSalary);
  systemLogger('DEDUCTION', 'Tax application completed: -$' + finalTax);

  const netPay = totalSalary - finalTax;
  systemLogger('SUCCESS', 'Calculation cycle finished. Net result: $' + netPay);

  document.getElementById('net-pay-display').innerText = '$' + netPay.toFixed(2);
});