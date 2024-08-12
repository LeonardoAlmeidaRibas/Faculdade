const db = require('./db');

function createAluno(nome, id_curso) {
    const id = db.alunos.length + 1;
    const aluno = { id, nome, id_curso };
    db.alunos.push(aluno);
    return aluno;
}

function readAlunos() {
    return db.alunos;
}

function updateAluno(id, nome, id_curso) {
    const aluno = db.alunos.find(a => a.id === id);
    if (aluno) {
        aluno.nome = nome;
        aluno.id_curso = id_curso;
        return aluno;
    }
    return null;
}

function deleteAluno(id) {
    const index = db.alunos.findIndex(a => a.id === id);
    if (index !== -1) {
        return db.alunos.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createAluno, readAlunos, updateAluno, deleteAluno };