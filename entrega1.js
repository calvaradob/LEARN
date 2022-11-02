class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
      
    }
    getFullName () {
        return `Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`;
           
    }

    AddMascotas () {
        let mascotas = [perro, gato]
        console.log(mascotas)
    }

    //addMascota () {}
//countMascotas () {}
//addBook () {}
//getBookNames () {}

}

let objeto1 = new Usuario ('Andrea', 'Alvarado')
console.log(objeto1)



