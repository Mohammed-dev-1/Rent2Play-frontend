export default class User {
  constructor(
    firstName, 
    lastName, 
    phoneNumber,
    email,
    age,
    category,
    isAdmin,
    password
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = age;
    this.category = category;
    this.isAdmin = isAdmin;
    this.password = password; 
  }
}