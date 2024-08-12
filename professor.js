const db = require('./db');

function createProfessor(nome) {
    const id = db.professores.length + 1;
    const professor = { id, nome };
    db.professores.push(professor);
    return professor;
}

function readProfessores() {
    return db.professores;
}

function updateProfessor(id, nome) {
    const professor = db.professores.find(p => p.id === id);
    if (professor) {
        professor.nome = nome;
        return professor;
    }
    return null;
}

function deleteProfessor(id) {
    const index = db.professores.findIndex(p => p.id === id);
    if (index !== -1) {
        return db.professores.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createProfessor, readProfessores, updateProfessor, deleteProfessor };