let cursos = [
{
  id: '3' , 
  nombre: 'sociales', 
  duracion: '24h', 
  valor: 500000

},
{
  id: '5' , 
  nombre: 'geometria', 
  duracion: '36h', 
  valor: 350000

},
{
  id: '7' , 
  nombre: 'biologia', 
  duracion: '60h',  
  valor: 300000 
},
{
  id: '10' , 
  nombre: 'trigonometria', 
  duracion: '60h',  
  valor: 300000 
},
{
  id: '30' , 
  nombre: 'biologia', 
  duracion: '60h',  
  valor: 300000 
}
];

const opciones = {
	  idcurso:{
	     alias:'id',
	     demand: true
	},
	  nombre_usuario:{
	     demand: true,
	     alias:'nombre'	
	},
	  cedula:{
	  	 alias:'cc',
	  	 demand: true
	  }
};
const argv = require('yargs')
            .command ('datos_estudiante','resultados datos', opciones)
            .command ('listar_cursos','Cursos', function() {
            	for(let i = 0; i < cursos.lenght; i++) {
            		let texto = 'curso: ' + cursos[i].nombre + '\n'
					        + 'duracion: ' + cursos[i].duracion + '\n'
							+ 'valor: ' + cursos[i].valor + '\n\n';

					console.log (texto);
            	}
            })
            .argv;

const fs = require ('fs');

let i = -1;
let mostrarCursos = (index, callback) => {
        setTimeout(function() {
                if (index < cursos.length - 1) {
                        index++;
                        mostrarCursos(index, function(resultado){
                            let texto = 'curso: ' + cursos[index].nombre + '\n'
					        + 'duracion: ' + cursos[index].duracion + '\n'
							+ 'valor: ' + cursos[index].valor + '\n\n';

							console.log (texto);
                        });

                        callback(index);
                }       
        }, 2000);
};


mostrarCursos(i, function(resultado){
        let texto = 'curso: ' + cursos[i + 1].nombre + '\n'
        + 'duracion: ' + cursos[i + 1].duracion + '\n'
		+ 'valor: ' + cursos[i + 1].valor + '\n\n';

		console.log (texto);
});


let crearArchivo = (curso) =>{
	let texto = 'Cedula: ' + argv.cc + '\n'
		+ 'nombre: ' + argv.nombre + '\n' 
		+ 'curso: ' + curso.nombre + '\n' 
		+ 'duracion: ' + curso.duracion + '\n'
		+ 'valor: ' + curso.valor;
	fs.writeFile('entrega1.txt', texto, (err) => {
		if (err) throw (err);
		console.log('se ha creado el archivo')
	});        

};

let cursoexistente = cursos.find( curso => curso.id == argv.id);

if (typeof cursoexistente !== 'undefined') {
	crearArchivo(cursoexistente);

	let texto = 'curso: ' + cursoexistente.nombre + '\n'
	        + 'duracion: ' + cursoexistente.duracion + '\n'
			+ 'valor: ' + cursoexistente.valor;

	console.log (texto);
} else {

	console.log('curso no existe');

}
