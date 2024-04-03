// Function for calculating KRA tax based on gross salary
function calculateKraTax(grossSalary) {
    // Check gross salary range and apply appropriate tax rate
    if (grossSalary <= 24999) {
        return grossSalary * 0.1;
    } else if (grossSalary <= 39999) {
        return grossSalary * 0.15;
    } else if (grossSalary <= 59999) {
        return grossSalary * 0.2;
    } else if (grossSalary <= 79999) {
        return grossSalary * 0.25;
    } else if (grossSalary <= 99999) {
        return grossSalary * 0.3;
    } else if (grossSalary <= 119999) {
        return grossSalary * 0.35;
    } else {
        return grossSalary * 0.4; // Apply maximum tax rate if gross salary exceeds all previous ranges
    }
}

// Function for calculating NHIF deductions based on gross salary
function calculateNhifDeductions(grossSalary) {
    // Check gross salary range and return fixed NHIF deduction amount
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else {
        return 1000; // Apply maximum NHIF deduction if gross salary exceeds all previous ranges
    }
}

// Function for calculating NSSF deductions based on gross salary
function calculateNssfDeductions(grossSalary) {
    // Define NSSF deduction percentage and maximum NSSF deduction
    const nssfPercentage = 0.06; 
    const maximumNssf = 1800; 
    // Calculate NSSF deductions based on gross salary and apply maximum limit
    const nssfDeductions = Math.min(grossSalary * nssfPercentage, maximumNssf);
    return nssfDeductions;
}

// Function for calculating net salary after deductions
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
    // Calculate KRA tax, NHIF deductions, and NSSF deductions
    const kraTax = calculateKraTax(grossSalary);
    const nhifDeductions = calculateNhifDeductions(grossSalary);
    const nssfDeductions = calculateNssfDeductions(grossSalary);
    // Calculate net salary after deducting taxes and deductions
    const netSalary = grossSalary - kraTax - nhifDeductions - nssfDeductions;

    // Return an object containing detailed salary information
    return {
        payee: kraTax,
        nhifDeductions,
        nssfDeductions,
        grossSalary,
        netSalary
    };
}

// Calculate net salary details
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Calculate total deductions by summing up KRA tax, NHIF deductions, and NSSF deductions
const totalDeductions = salaryDetails.payee + salaryDetails.nhifDeductions + salaryDetails.nssfDeductions;

// Log total deductions to display on the console 
console.log("Total Deductions:", totalDeductions);
