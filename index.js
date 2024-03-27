//1. grade generator
function generateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
//2. speed detector 
function speedDetector(speed) {
    const speedLimit = 70;
    const km = 5;
    
    if (speed <= speedLimit) {
        return 'Ok';
    } else {
        const points = Math.floor((speed - speedLimit) / km);
        if (points >= 12) {
            return 'License suspended';
        } else {
            return 'Points: ' + points;
        }
    }
}

//3. sallary calculator
// for calculating kra tax
function calculateKraTax(grossSalary) {
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
        return grossSalary * 0.4;
    }
}

// for calculating nhif deductions
function calculateNhifDeductions(grossSalary) {
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
        return 1000;
    }
}
function calculateNssfDeductions(grossSalary) {
    const nssfPercentage = 0.06; 
    const maximumNssf = 1800; 
    const nssfDeductions = Math.min(grossSalary * nssfPercentage, maximumNssf);
    return nssfDeductions;
}

// for calculating net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const kraTax = calculateKraTax(grossSalary);
    const nhifDeductions = calculateNhifDeductions(grossSalary);
    const nssfDeductions = calculateNssfDeductions(grossSalary);
    const netSalary = grossSalary - kraTax - nhifDeductions - nssfDeductions;

    return {
        payee: kraTax,
        nhifDeductions,
        nssfDeductions,
        grossSalary,
        netSalary
    };
}

// total 
const totalDeductions = salaryDetails.payee + salaryDetails.nhifDeductions + salaryDetails.nssfDeductions;
console.log("Total Deductions:", totalDeductions);

