const db = require('./database');

function createAlunoAula(id_aula, id_aluno) {
    const id = db.alunos_aulas.length + 1;
    const aluno_aula = { id, id_aula, id_aluno };
    db.alunos_aulas.push(aluno_aula);
    return aluno_aula;
}

function readAlunosAulas() {
    return db.alunos_aulas;
}

function updateAlunoAula(id, id_aula, id_aluno) {
    const aluno_aula = db.alunos_aulas.find(aa => aa.id === id);
    if (aluno_aula) {
        aluno_aula.id_aula = id_aula;
        aluno_aula.id_aluno = id_aluno;
        return aluno_aula;
    }
    return null;
}

function deleteAlunoAula(id) {
    const index = db.alunos_aulas.findIndex(aa => aa.id === id);
    if (index !== -1) {
        return db.alunos_aulas.splice(index, 1)[0];
    }
    return null;
}

module.exports = { createAlunoAula, readAlunosAulas, updateAlunoAula, deleteAlunoAula };