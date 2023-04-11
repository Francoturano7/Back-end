class ProductManager {
    constructor(products = []) {
      this.products = products;
      this.lastId = 0;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.log("Error: Todos los campos son obligatorios.");
        return;
      }
      
      if (this.products.some(p => p.code === product.code)) {
        console.log("Error: El código debe ser único.");
        return;
      }
      
      const newProduct = { ...product, id: ++this.lastId };
      this.products.push(newProduct);
      console.log(`Producto agregado con id ${newProduct.id}.`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Error: Not found.");
      }
    }
  }
  
  // Ejemplo de uso:
  const pm = new ProductManager();
  pm.addProduct({ title: "Martillo", description: "Martillo Galponero con mango de fibra", price: 1200, thumbnail: "martillo.jpg", code: "EVOL1250", stock: 5 });
  pm.addProduct({ title: "Pinza", description: "Pinza universal de 8 pulgadas con mango aislado", price: 2200, thumbnail: "pinza.jpg", code: "EVOL4312", stock: 3 });
  console.log(pm.getProducts());
  console.log(pm.getProductById(1));
  console.log(pm.getProductById(3));
  
  
 