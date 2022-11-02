class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = []
      
    }
    getFullName () {
        return `Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`;
           
    }

    AddMascotas (masc) {
        this.mascotas.push(masc);
        
    }

}

const objeto1 = new Usuario ('Andrea', 'Alvarado')
console.log(objeto1)

objeto1.AddMascotas("Perro")
objeto1.AddMascotas("Gato")

console.log(objeto1)



