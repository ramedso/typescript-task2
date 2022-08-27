export class Person {
  firstname: string;
  lastName: string;
  middleName: string;
  age: number;
  year: any = new Date().getFullYear();
  emails: string[] = [];

  constructor(
    firstname: string,
    middleName: string,
    lastName: string,
    age: number,
    emails: string[] = []
  ) {
    this.firstname = firstname;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.emails = emails;
  }

  getFullName(first: string, middle: string, last: string) {
    return first + ' ' + middle + ' ' + last;
  }

  getBirthYear() {
    return this.year - this.age;
  }
}
