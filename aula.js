const db = require('./db');

function createAula(id_professor, id_materia, id_sala) {
    const id = db.aulas.length + 1;
    const aula = { id, id_professor, id_materia, id_sala };
    db.aulas.push(aula);
    return aula;
}

function readAulas() {
    return db.aulas;
}

function updateAula(id, id_professor, id_materia, id_sala) {
    const aula = db.aulas.find(a => a.id === id);
    if (aula) {
        aula.id_professor = id_professor;
        aula.id_materia = id_materia;
        aula.id_sala = id_sala;
        return aula;
    }
    return null;
}

function deleteAula(id) {
    const index = db.aulas.findIndex(a => a.id === id);
    if (index !== -1) {
        return db.aulas.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createAula, readAulas, updateAula, deleteAula };