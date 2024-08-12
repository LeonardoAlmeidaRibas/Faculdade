const db = require('./db');

function createTurno(nome, inicio, termino) {
    const id = db.turnos.length + 1;
    const turno = { id, nome, inicio, termino };
    db.turnos.push(turno);
    return turno;
}

function readTurnos() {
    return db.turnos;
}

function updateTurno(id, nome, inicio, termino) {
    const turno = db.turnos.find(t => t.id === id);
    if (turno) {
        turno.nome = nome;
        turno.inicio = inicio;
        turno.termino = termino;
        return turno;
    }
    return null;
}

function deleteTurno(id) {
    const index = db.turnos.findIndex(t => t.id === id);
    if (index !== -1) {
        return db.turnos.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createTurno, readTurnos, updateTurno, deleteTurno };