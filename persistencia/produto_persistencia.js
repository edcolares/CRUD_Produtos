const { Client } = require('pg')

const conexao = {
    user: 'postgres',
    password: 'postgress',
    host: '127.0.0.1',
    port: 5432,
    database: 'crud_produtos'
}


//LISTAR PRODUTOS
const sql = "SELECT * FROM crud_produtos"
exports.listar = (callback) => {
    const cliente = new Client(conexao)
    cliente.connect()
    cliente.query(sql, (err, result) => {
        if (err) {
            callback(err, undefined)
        } else {
            callback(undefined, result.rows)
        }
        cliente.end()
    })
}

//INCLUIR PRODUTOS
exports.incluir = (produto, callback) => {
    const cliente = new Client(conexao)
    cliente.connect()

    const sql = 'INSERT INTO crud_produtos(nome, preco, local_loja, link) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [produto.nome, produto.preco, produto.local_loja, produto.link]

    cliente.query(sql, values, (err, result) => {
        if (err) {
            callback(err, undefined)
        } else {
            callback(undefined, result.rows[0])
        }
        cliente.end()
    })
}


exports.buscarPorId = (id, callback) => {
    const cliente = new Client(conexao)
    cliente.connect()

    const sql = 'SELECT * FROM crud_produtos WHERE id=$1'
    const values = [id]

    cliente.query(sql, values, (err, result) => {
        if (err) {
            callback(err, undefined)
        } else {
            callback(undefined, result.rows[0])
        }
        cliente.end()
    })
}


exports.atualizar = (id, produto, callback) => {
    const cliente = new Client(conexao)
    cliente.connect()

    const sql = 'UPDATE crud_produtos SET nome=$1, preco=$2, local_loja=$3, link=$4 WHERE id=$5 RETURNING *'
    const values = [produto.nome, produto.preco, produto.local_loja, produto.link, id]

    cliente.query(sql, values, (err, result) => {
        if (err) {
            callback(err, undefined)
        } else {
            callback(undefined, result.rows[0])
        }
        cliente.end()
    })
}


exports.deletar = (id, callback) => {
    const cliente = new Client(conexao)
    cliente.connect()
    

    const sql = 'DELETE FROM crud_produtos WHERE id=$1 RETURNING *'
    const values = [id]

    cliente.query(sql, values, (err, result) => {
        if (err) {
            callback(err, undefined)
        } else {
            callback(undefined, result.rows[0])
        }
        cliente.end()
    })
}
