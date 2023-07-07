class Employee{
  constructor(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getSalary(){
    return this.salary
  }
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setSalary(salary) {
    this.salary = salary;
  }

}
let a = new Employee ("Tunzala","20","1000")
console.log(`${a.getName()} has ${a.getAge()} and gets ${a.getSalary()} from company`)

class Programmer extends Employee{
  constructor(name,age,salary,lang){
    super(name, age, salary)
    this.lang=lang;
  }
  getLanguage(){
    return this.lang
  }
  setLanguage(lang) {
    this.lang = lang;
  }
  getMultipliedSalary(){
    return super.getSalary()*3
  }
}

let b = new Programmer ("Tunzala",20,1000,"JavaScript")
console.log(`${b.getName()} learns ${b.getLanguage()} and earns ${b.getMultipliedSalary()} `)
let i = new Programmer ("Alex", 34, 2000, "C++, Python" )
console.log(i)
console.log(i.getMultipliedSalary())