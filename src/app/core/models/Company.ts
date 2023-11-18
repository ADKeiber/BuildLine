export class Customer {

  name:string;
  address: string;
  phoneNumber: string;
  constructor(name: string, address:string, phoneNumber: string) {
    this.address = address;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
