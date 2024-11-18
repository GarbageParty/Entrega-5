// Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

// Instrucciones para resolver el problema:
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'


const catalogo = [];

let libro1 = {

    titulo: "Cien años de soledad",
  
    autor: "Gabriel García Marquez",
  
    año: 1967,

    estado: "Nuevo",

    Capitulos: ["Capitulo - 1","Capitulo - 2","Capitulo - 3"]
  
  };

  let libro2 = {

    titulo: "El Código da Vinci",
  
    autor: "Dan Brown",
  
    año: 2003,

    estado: "Usado",

    Capitulos: ["Capitulo - 1","Capitulo - 2","Capitulo - 3","Capitulo - 4","Capitulo - 5","Capitulo - 6"]
  
  };

  let libro3 = {

    titulo: "El señor de los anillos",
  
    autor: "J. R. R. Tolkien",
  
    año: 1954,

    estado: "Nuevo",

    Capitulos: ["Capitulo - 1","Capitulo - 2","Capitulo - 3","Capitulo - 4","Capitulo - 5"]
  
  };

  let libro4 = {

    titulo: "Don Quijote de la Mancha",
  
    autor: "Miguel de Cervantes Saavedra",
  
    año: 1605,

    estado: "Deteriorado",

    Capitulos: ["Capitulo - 1","Capitulo - 2","Capitulo - 3","Capitulo - 4","Capitulo - 5","Capitulo - 6"]
  
  };

 catalogo.push(libro1);
 catalogo.push(libro2);
 catalogo.push(libro3);
 catalogo.push(libro4);

// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

 let libroBuscado = catalogo[1]
 
 let describirLibro = "Libro titulado: " + libroBuscado.titulo + ", Escrito por: " + libroBuscado.autor + ", En el año: " + libroBuscado.año + ", El estado es: " + libroBuscado.estado;

 console.log(describirLibro)


// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

 libro1.Capitulos.push("Capitulo - 4");
 libro4.Capitulos.pop("Capitulo - 6");

 function mostrarCatalogo() {
    console.log("El catalogo es: ");
    for (let i = 0; i < catalogo.length; i++) {
        console.log(catalogo[i]);
    }
}

 mostrarCatalogo();






