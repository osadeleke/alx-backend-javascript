interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'John',
  lastName: 'One',
  age: 15,
  location: 'Nigeria'
};

let student2: Student = {
  firstName: 'Adam',
  lastName: 'Two',
  age: 35,
  location: 'Outside'
};

let studentsList: Student[] = [
  student1,
  student2
];

function renderTable() {
  let tableBody = document.querySelector("#myTable tbody");

  tableBody.innerHTML = "";

  studentsList.forEach(person => {
    let row = document.createElement("tr");

    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = person.firstName;
    row.appendChild(firstNameCell);

    let locationCell = document.createElement("td");
    locationCell.textContent = person.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  })
}

renderTable();
