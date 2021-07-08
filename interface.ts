interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

class Product2 {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  console.log(product.name + " kaydedildi!");
}

function save2(product: Product2) {
  console.log(Product2.name + " kaydedildi!");
}

save({ id: 1, name: "Laptop", unitPrice: 500 });

let mouse = new Product2();
mouse.name = "Steelseries";

save2(mouse);

interface PersonService {
  save();
}

class CustomerServise implements PersonService {
  save() {}
}
