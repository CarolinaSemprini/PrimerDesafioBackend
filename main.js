class Productmanager{
    constructor(){
        this.products=[]

    }

    static id=0
    //aqui utilizo una variable static para pasarle un id al producto y a cada producto le voy a sumar un id

    addproducts(title, description, price, thumbnail,code, stock){
        //la cantidad de interaciones sera hasta que i sea menor que la cantidad de productos que tenga el arreglo y por cada iteracción i va a sumar uno. Por cada iteración se hace una consulta
        for(let i= 0; i < this.products.length; i++){
            if(this.products[i].code=== code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }
        // validación de que esten todos los campos completos
        const newProduct= {
            title,
            description,
            price,
            thumbnail,
            code, 
            stock,
        }
       if(!Object.values(newProduct).includes(undefined)){
        // en caso de que todos los campos esten completos, de que no exista undefined, entonces agrega el producto
        Productmanager.id++
        //si estan todos los datos, realiza una copia de todos los datos (...newproduct) que se acaban de crear más un id que se va incrementado

        this.products.push({
            ...newProduct,
            id:Productmanager.id
        });
       }else{
        console.log("todos los campos son obligatorios")
       }  

    }

    getproduct(){
        return this.products;
    }

    //Retorno un objeto cuyo producto sea igual al id que se recibe por parametro de la función
    

    getproductById(id){
        //Si no encuentra el producto que coincida con el id, entonces me devuelve el id que no existe, si coincide el id con el producto me devuelve el producto correspondiente a dicho id. 
        const producto= this.products. find((producto)=>producto.id===id)
        if(producto){
           return producto;
        }else{
            return `el id: ${id} no existe`
        }
 
    }
    
}


const productos = new Productmanager();
//primero consulto si hay productos , y me devuelve array vacio

console.log (productos.getproduct());

// Agrego los productos
productos.addproducts('producto prueba1', 'descripcion1', '2000', 'sin imagen ', 'abc223', 5 );
productos.addproducts('producto prueba2', 'descripcion2', '3000', 'sin imagen ', 'abc224',6 );

//segunda llamada me muestra el arreglo con los productos
console.log (productos.getproduct());

// comprobación del codigo de un producto esta repetido me avisa
productos.addproducts('producto prueba3', 'descripcion3', '3000', 'sin imagen ', 'abc224', 6 );

// Producto segun su ID
console.log (productos.getproductById(2));

//Busqueda por ID no encontrado
console.log(productos.getproductById(3));


