//Simulador interactivo de calculo de promedios de cursada
//Declaracion de variables
let rta = ""
let nombreAlumno = prompt("Ingrese el nombre del alumno/a")
let apellidoAlumno = prompt("Ingrese el apellido del alumno/a")
let notas = 0
let i = 0
//Funcion para calcular promedio de notas
function promedioNotas(cantNotas, sumaNotas) {
    let resultado = sumaNotas/cantNotas
    if (resultado < 7) {
        alert("Lamentablemente " + nombreAlumno + " " + apellidoAlumno + " no aprobó la cursada, su promedio es " + resultado.toFixed(2))
    } else {
        alert("¡Felicitaciones! " + nombreAlumno + " " + apellidoAlumno + " ha aprobado la cursada con un promedio de " + resultado.toFixed(2) )
    }
}
//Bucle para solicitar el ingreso de notas
do {
    let nota = Number(prompt("Ingrese nota del alumno:"))

    //Verificar si la nota esta entre 0 y 10
    if (nota > 10 || nota < 0) {
        alert("Error: La nota debe ser un numero entre 0 y 10. Intente nuevamente.")
        continue
    }

    notas = notas + nota
    i = i + 1

    if (i < 2) {
        rta = prompt('Usted ha ingresado ' + i + " nota de " + nombreAlumno + " " + apellidoAlumno + '\n¿Desea cargar mas notas?\n\t(Escriba "ESC" para calcular promedio) ').toLowerCase()
    } else {
        rta = prompt('Usted ha ingresado ' + i + " notas de " + nombreAlumno + " " + apellidoAlumno + '\n¿Desea cargar mas notas?\n\t(Escriba "ESC" para calcular promedio) ').toLowerCase()
    }
    
    
} while (rta != "esc");


promedioNotas(i,notas)
