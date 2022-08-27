import { Person } from './person';

let person = new Person('Lorena', 'Ipsum', 'Dolores', 26, [
  'lorena@gmail.com',
  'dolores@gmail.com',
]);

const fullName: HTMLElement = document.getElementById('name');
fullName.innerHTML = person.getFullName();

const birthYear: HTMLElement = document.getElementById('age');
birthYear.innerHTML = person.getBirthYear().toString();

const emails: HTMLElement = document.getElementById('emails');
emails.innerHTML = `
 ${person.emails}
`;
