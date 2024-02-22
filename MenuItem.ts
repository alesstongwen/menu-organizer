export class MenuItem {
  category: string;
  name: string;
  description: string;
  price: string;
  constructor(
    category: string,
    name: string,
    description: string,
    price: string
  ) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
