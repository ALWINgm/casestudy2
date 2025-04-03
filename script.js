
let employees = [
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith", department: "Engineering" },
    { name: "Charlie Brown", department: "Marketing" },
    { name: "David Wilson", department: "Engineering" },
    { name: "Eve Adams", department: "HR" }
];
let dep= document.getElementById('dep');
const empList = document.getElementById('list');

function initDashboard() {
    const deps = [...new Set(employees.map(emp => emp.department))];
    deps.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        dep.appendChild(option);
    });
    displayEmployees(employees);
    dep.addEventListener('change', function() {
        const selectedDept = this.value;
        if (selectedDept === 'all') {
            displayEmployees(employees);
        } else {
            const filteredEmployees = employees.filter(emp => emp.department === selectedDept);
            displayEmployees(filteredEmployees);
        }
    });
}
function displayEmployees(employeesToDisplay) {
    empList.innerHTML = ''; 
    
    if (employeesToDisplay.length === 0) {
        empList.innerHTML = '<li>No employees found</li>';
        return;
    }
    
    employeesToDisplay.forEach(employee => {
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.innerHTML = `
            <span>${employee.name}</span>
            <span class="department">${employee.department}</span>
        `;
        empList.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', initDashboard);