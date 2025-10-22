// 1. Crear un objeto Persona
// Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.
   const Persona = {
        nombre: "jose",
        edad: 25,
        ciudad: "Vitoria",
    };

    console.log(Persona.nombre);
    console.log(Persona.edad);
    console.log(Persona.ciudad);

// 2. Modificar propiedades
// A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.

    Persona.ciudad = "Bilbao";
    Persona.profesion = "Medico";

    console.log(Persona);

// 3. Objeto Libro
// Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."

    const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967, 

    resumen: () => { return `El libro '${libro.titulo}' fue escrito por ${libro.autor} en ${libro.anioPublicacion}`}
};

    console.log(libro.resumen());

// 4. Array de objetos
// Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.

    const estudiantes = [
    { nombre: "alba", edad: 27, notaFinal: 8.5 },
    { nombre: "hana", edad: 32, notaFinal: 9.5 },
    { nombre: "esther", edad: 25, notaFinal: 7.5 }
    ];

    estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Nota Final: ${estudiante.notaFinal}`);
    });


// 5. Método para calcular la edad
// Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.

    const Persona = {
        nombre: "jose",
        anioNacimiento : 1990,

    calcularEdad:  function() { const anioActual=new Date().getFullYear();
        return anioActual - Persona.anioNacimiento}
};
     console.log(`${Persona.nombre} tiene ${Persona.calcularEdad()} años.`);

// 6. Objeto Coche
// Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.

    const Coche = {
        marca: "nissasn",
        Modelo: "qasqai",
        anio:   2010,
        velocidadActual:0,

        Acelerar: () => Coche.velocidadActual += 10        
        Frenar: function() {Coche.velocidadActual -= 10;
        }

    }

// 7. Recorrer un objeto
// Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.




// 8. Contar propiedades
// Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.

// 9. Objeto dentro de otro objeto
// Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.

// 10. Añadir métodos a objetos
// Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.