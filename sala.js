const db = require('./db');

function createSala(numero) {
    const id = db.salas.length + 1;
    const sala = { id, numero };
    db.salas.push(sala);
    return sala;
}

function readSalas() {
    return db.salas;
}

function updateSala(id, numero) {
    const sala = db.salas.find(s => s.id === id);
    if (sala) {
        sala.numero = numero;
        return sala;
    }
    return null;
}

function deleteSala(id) {
    const index = db.salas.findIndex(s => s.id === id);
    if (index !== -1) {
        return db.salas.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createSala, readSalas, updateSala, deleteSala };