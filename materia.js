const db = require('./db');

function createMateria(nome, horas_totais, id_curso) {
    const id = db.materias.length + 1;
    const materia = { id, nome, horas_totais, id_curso };
    db.materias.push(materia);
    return materia;
}

function readMaterias() {
    return db.materias;
}

function updateMateria(id, nome, horas_totais, id_curso) {
    const materia = db.materias.find(m => m.id === id);
    if (materia) {
        materia.nome = nome;
        materia.horas_totais = horas_totais;
        materia.id_curso = id_curso;
        return materia;
    }
    return null;
}

function deleteMateria(id) {
    const index = db.materias.findIndex(m => m.id === id);
    if (index !== -1) {
        return db.materias.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createMateria, readMaterias, updateMateria, deleteMateria };