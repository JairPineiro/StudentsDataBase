class Student {
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.subjects = []
        this.grades = []
    }
}


// FUNCION PARA REGRESAR AL MENU PRINCIPAL
function returnMenu(){
    document.getElementById('student-signUp').style.display = "none"
    document.getElementById('main-menu').style.display = "flex";
}
// FUNCION PARA MOSTRAR MENU DE REGISTRO DE ALUMNO
function signUp(){
    document.getElementById('main-menu').style.display = "none";
    document.getElementById('student-signUp').style.display = "flex"
}

// FUNCION PARA MOSTRAR LOS ALUMNOS INSCRITOS AL CAMPUS
function showStudents(){
    document.getElementById('students-list-page').style.display ="flex";
    document.getElementById('main-menu').style.display = "none";
}
// FUNCION PARA MOSTRAR LAS MATERIAS
function subjectMenu(){
    document.getElementById('subjects').style.display = "block";
    document.getElementById('main-menu').style.display = "none";
}

// FUNCION PARA MOSTRAR LOS GRUPOS POR MATERIA
function showScaresGroup(){
    document.getElementById('group-scares').style.display = "block";
    document.getElementById('subjects').style.display = "none";
}

function showHistoryGroup(){
    document.getElementById('group-history').style.display = "block";
    document.getElementById('subjects').style.display = "none";
}

function showDoorGroup(){
    document.getElementById('group-door').style.display = "block";
    document.getElementById('subjects').style.display = "none";
}

function showLabGroup(){
    document.getElementById('group-lab').style.display = "block";
    document.getElementById('subjects').style.display = "none";
}

// FUNCIONES PARA MOSTRAR CADA GRUPO

// INTRODUCCION A LOS SUSTOS
 function showScaresGroupA(){
     document.getElementById('scares-groupA').style.display = "block";
     document.getElementById('group-scares').style.display = "none";
 }

function showScaresGroupB(){
    document.getElementById('scares-groupB').style.display = "block";
    document.getElementById('group-scares').style.display = "none";
}

// HISTORIA DEL MIEDO
function showHistoryGroupA(){
    document.getElementById('history-groupA').style.display = "block";
    document.getElementById('group-history').style.display = "none";
}

function showHistoryGroupB(){
    document.getElementById('history-groupB').style.display = "block";
    document.getElementById('group-history').style.display = "none";
}

// TECNOLOGIA DE LAS PUERTAS
function showDoorGroupA(){
    document.getElementById('door-groupA').style.display = "block";
    document.getElementById('group-door').style.display = "none";
}

function showDoorGroupB(){
    document.getElementById('door-groupB').style.display = "block";
    document.getElementById('group-door').style.display = "none";
}

// LABORATORIO DE SUSTOS
function showLabGroupA(){
    document.getElementById('lab-groupA').style.display = "block";
    document.getElementById('group-lab').style.display = "none";
}

function showLabGroupB(){
    document.getElementById('lab-groupB').style.display = "block";
    document.getElementById('group-lab').style.display = "none";
}

// FUNCION PARA REGISTRAR ESTUDIANTE
function registerStudent(){
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;

    if(name && lastName && age){
        if(age >= 17 && age <= 60){
            let newStudent = new Student(name, lastName, age)
            saveStudent(newStudent);
            displayStudents();
            returnMenu();
        }else{
            alert('La edad que ingresaste no es correcta. Inténtalo nuevamente')
        }
    }else{
        alert('Debes completar los campos correctamente')
    }
}

function saveStudent(newStudent){
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(newStudent);

    localStorage.setItem('students',JSON.stringify(students));
}

// FUNCION PARA MOSTRAR ESTUDIANTE

function displayStudents() {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let studentsTable = document.getElementById('students-table');

    studentsTable.innerHTML = '';

    let headerRow = studentsTable.insertRow(0);
    let headers = ['ID','Nombre', 'Apellido', 'Edad','Acciones'];
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    students.forEach((student, index) => {

        let row = studentsTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);


        cell2.textContent = student.name;
        cell3.textContent = student.lastName;
        cell4.textContent = student.age;

        // Crear la celda de acciones (columna 5)
        let actionsCell = row.insertCell(4);

        // Crear la lista desplegable de grupos y materias
        let dropdown = document.createElement('select');

        let placeholderOption = document.createElement('option');
        placeholderOption.text = 'Selecciona un grupo';
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        dropdown.appendChild(placeholderOption);

        // Agregar las opciones de grupos y materias aquí según tus necesidades
        let optionScaresGroupA = document.createElement('option');
        optionScaresGroupA.textContent = 'Introducción a los sustos Grupo A';
        optionScaresGroupA.value = 'scares-groupA';
        dropdown.appendChild(optionScaresGroupA);

        let optionScaresGroupB = document.createElement('option');
        optionScaresGroupB.textContent = 'Introducción a los sustos Grupo B';
        optionScaresGroupB.value = 'scares-groupB';
        dropdown.appendChild(optionScaresGroupB);

        let optionHistoryGroupA = document.createElement('option');
        optionHistoryGroupA.textContent = 'Historia del miedo Grupo A';
        optionHistoryGroupA.value = 'history-groupA';
        dropdown.appendChild(optionHistoryGroupA);

        let optionHistoryGroupB = document.createElement('option');
        optionHistoryGroupB.textContent = 'Historia del miedo Grupo B';
        optionHistoryGroupB.value = 'history-groupB';
        dropdown.appendChild(optionHistoryGroupB);

        let optionDoorGroupA = document.createElement('option');
        optionDoorGroupA.textContent = 'Tecnología de las Puertas Grupo A';
        optionDoorGroupA.value = 'door-groupA';
        dropdown.appendChild(optionDoorGroupA);

        let optionDoorGroupB = document.createElement('option');
        optionDoorGroupB.textContent = 'Tecnología de las Puertas Grupo B';
        optionDoorGroupB.value = 'door-groupB';
        dropdown.appendChild(optionDoorGroupB);

        let optionLabGroupA = document.createElement('option');
        optionLabGroupA.textContent = 'Laboratorio de Sustos Grupo A';
        optionLabGroupA.value = 'lab-groupA';
        dropdown.appendChild(optionLabGroupA);

        let optionLabGroupB = document.createElement('option');
        optionLabGroupB.textContent = 'Laboratorio de Sustos Grupo B';
        optionLabGroupB.value = 'lab-groupB';
        dropdown.appendChild(optionLabGroupB);

        dropdown.dataset.student = JSON.stringify(student);
        // Agregar un evento para manejar la selección de grupo o materia
        dropdown.addEventListener('change', function(event) {
            let selectedValue = event.target.value;
            let studentData = JSON.parse(event.target.dataset.student);
            // Aquí podrías agregar la lógica para asignar al estudiante al grupo o materia seleccionado
            addStudentToGroup(studentData, selectedValue);
        });

        actionsCell.appendChild(dropdown);

        // Crear el botón de eliminar
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            deleteStudent(index);
            displayStudents();
        });
        cell5.appendChild(deleteButton);
    });   
}


// FUNCION PAR ELIMINAR ESTUDIANTE
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    if (index >= 0 && index < students.length) {
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
    }
}

// FUNCION PARA AGREGAR ESTUDIANTE A UN GRUPO
function addStudentToGroup(student, selectedValue) {
    if (selectedValue === 'scares-groupA' || selectedValue === 'scares-groupB' || selectedValue === 'history-groupA' || 
    selectedValue === 'history-groupB' || selectedValue === 'door-groupA' || selectedValue === 'door-groupB' 
    || selectedValue === 'lab-groupA' || selectedValue === 'lab-groupB') {
        student.group = selectedValue;
        saveStudent(student); 
        alert(`El estudiante ${student.name} ${student.lastName} ha sido asignado al grupo ${selectedValue}.`);
        displayStudentsInGroup(selectedValue);
    } else {
        alert('Error: Grupo seleccionado no válido.');
    }
}

// FUNCION PARA MOSTRAR A LOS ALUMNOS EN SU NUEVO GRUPO
function displayStudentsInGroup(group) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let groupContainer = document.getElementById(`selected-${group}-students`);

    // Vaciar el contenedor del grupo
    groupContainer.innerHTML = '';

    // Crear una tabla para mostrar los estudiantes
    let table = document.createElement('table');


    let headerRow = table.insertRow();
    ['Nombre', 'Apellido', 'Edad', 'Calificación', 'Calificación Actualizada'].forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    // Crear las filas de la tabla para los estudiantes asignados al grupo
    students.forEach(student => {
        if (student.group === group) {
            let row = table.insertRow();
            row.insertCell(0).textContent = student.name;
            row.insertCell(1).textContent = student.lastName;
            row.insertCell(2).textContent = student.age;
            let inputCell = row.insertCell(3);
        let input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 100;
        inputCell.appendChild(input);
        }
    });

    // Agregar la tabla al contenedor del grupo
    groupContainer.appendChild(table);
}

function orderByName() {
    let table = document.getElementById('selected-scares-groupA-students');
    let rows = Array.from(table.getElementsByTagName('tr'));

    let headerRow = rows.shift();

    rows.sort((a, b) => {
        let nameA = a.getElementsByTagName('td')[0].textContent;
        let nameB = b.getElementsByTagName('td')[0].textContent;
        return nameA.localeCompare(nameB);
    });

    table.innerHTML = '';
    table.appendChild(headerRow);

    rows.forEach(row => table.appendChild(row));
}

function saveGrades() {
    let table = document.getElementById('selected-scares-groupA-students');
    let rows = table.getElementsByTagName('tr');

    // Iterar sobre cada fila de la tabla, comenzando desde la segunda fila (ignorando la fila de encabezado)
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let calificacionInput;
        if (cells.length >= 4) {
            calificacionInput = cells[3].querySelector('input[type="number"]');
        }

        // Verificar si se encontró un campo de entrada de calificación en la celda
        if (calificacionInput) {
            let calificacion = calificacionInput.value;
            // Realizar aquí cualquier validación necesaria para la calificación
            // Guardar la calificación en algún lugar o realizar cualquier otro procesamiento
            console.log('Calificación del estudiante ' + (i - 1) + ': ' + calificacion);
            let newGradeCell = rows[i].insertCell(4);
            newGradeCell.textContent = calificacion;
        } else {
            console.log('No se encontró un campo de entrada de calificación en la fila ' + i);
        }
    }
}

function orderByGrade() {
    let table = document.getElementById('selected-scares-groupA-students');
    let rows = Array.from(table.rows).slice(1); // Convertir las filas de la tabla a un array y omitir la fila de encabezado

    rows.sort((a, b) => {
        let calificacionA = parseFloat(a.cells[4].textContent); // Obtener la calificación de la primera fila
        let calificacionB = parseFloat(b.cells[4].textContent); // Obtener la calificación de la segunda fila
        return calificacionB - calificacionA; // Ordenar en orden descendente
    });

    // Limpiar la tabla antes de volver a agregar las filas ordenadas
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Agregar las filas ordenadas de nuevo a la tabla
    rows.forEach(row => table.appendChild(row));
}

// Definir la función para buscar alumnos
function buscarAlumno() {
    const inputBusqueda = document.getElementById('buscar');
    const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
    const table = document.getElementById('selected-scares-groupA-students');
    const filas = Array.from(table.getElementsByTagName('tr'));

    filas.forEach(fila => {
        const nombreAlumnoElemento = fila.querySelector('td:first-child');
        if (nombreAlumnoElemento) {
            const nombreAlumno = nombreAlumnoElemento.textContent.trim().toLowerCase();
            if (nombreAlumno.includes(valorBusqueda)) {
                fila.style.display = ''; // Mostrar fila si coincide con la búsqueda
            } else {
                fila.style.display = 'none'; // Ocultar fila si no coincide con la búsqueda
            }
        }
    });
}


// Obtener la referencia al botón y al campo de búsqueda
const botonBuscar = document.querySelector('.buscar-container button');
const inputBuscar = document.getElementById('buscar');

// Agregar un evento al botón de búsqueda
botonBuscar.addEventListener('click', buscarAlumno);


window.onload = function() {
    displayStudents();
    displayStudentsInGroup('scares-groupA');
    displayStudentsInGroup('scares-groupB');
    displayStudentsInGroup('history-groupA');
    displayStudentsInGroup('history-groupB');
    displayStudentsInGroup('door-groupA');
    displayStudentsInGroup('door-groupB');
    displayStudentsInGroup('lab-groupA');
    displayStudentsInGroup('lab-groupB');
};