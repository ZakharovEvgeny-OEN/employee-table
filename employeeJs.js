class Employee { 
    name;
    surname;  
    age;
    constructor(name, surname, age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
  }
  
  let employees = [
    new Employee("Иван", "Иванов", 30),
    new Employee("Мария", "Петрова", 28),
    new Employee("Алексей", "Сидоров", 35),
    new Employee("Елена", "Кузнецова", 25),
    new Employee("Дмитрий", "Орлов", 40)
  ];
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
  
    getHtml() {
      let string = "<table>";
      string += "<tr><th>Имя</th><th>Фамилия</th><th>Возраст</th></tr>";
      for (let employ of this.employees) {
        string += `<tr>
          <td>${employ.name}</td>
          <td>${employ.surname}</td>
          <td>${employ.age}</td>
        </tr>`;
      }
      string += "</table>";
      return string;
    }
  }
  
  class StyledEmpTable extends EmpTable {
    getStyles() {
      return `<style>
        table {
          border-collapse: collapse;
          width: 60%;
          margin: 20px auto;
        }
        table, th, td {
          border: 1px solid black;
        }
        th, td {
          padding: 5px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>`;
    }
  
    getHtml() {
      return this.getStyles() + super.getHtml();
    }
  }
  
  let rezult = new StyledEmpTable(employees).getHtml();
  document.getElementById("division").innerHTML = rezult;
  