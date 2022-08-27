export class Person {
  firstname: string;
  lastName: string;
  middleName: string;
  age: number;
  year: any = new Date().getFullYear();
  emails: Array<string> = [];

  constructor(
    firstname: string,
    middleName: string,
    lastName: string,
    age: number,
    emails: Array<string> = []
  ) {
    this.firstname = firstname;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.emails = emails;
  }

  getFullName() {
    return this.firstname + ' ' + this.middleName + ' ' + this.lastName;
  }

  getBirthYear() {
    return this.year - this.age;
  }
}
