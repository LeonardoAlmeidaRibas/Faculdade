const db = require('./db');

function createCurso(nome, horas_totais, id_turno) {
    const id = db.cursos.length + 1;
    const curso = { id, nome, horas_totais, id_turno };
    db.cursos.push(curso);
    return curso;
}

function readCursos() {
    return db.cursos;
}

function updateCurso(id, nome, horas_totais, id_turno) {
    const curso = db.cursos.find(c => c.id === id);
    if (curso) {
        curso.nome = nome;
        curso.horas_totais = horas_totais;
        curso.id_turno = id_turno;
        return curso;
    }
    return null;
}

function deleteCurso(id) {
    const index = db.cursos.findIndex(c => c.id === id);
    if (index !== -1) {
        return db.cursos.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createCurso, readCursos, updateCurso, deleteCurso };