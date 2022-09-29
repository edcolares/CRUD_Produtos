const produtoPersistencia = require('../persistencia/produto_persistencia')

exports.listar = (req, res) => {
    produtoPersistencia.listar((err, listaProdutos) => {
        if (err) {
            return res.status(500).json({ erro: err })
        } else {
            return res.json(listaProdutos)
        }
    })
}

exports.incluir = (req, res) => {
    const produto = req.body
    // Inserir no banco (produto)
    // retornar o produto com o ID
    produtoPersistencia.incluir(produto, (err, produtoInserido) => {
        if (err) {
            return res.status(500).json({ erro: err })
        } else {
            return res.status(201).json(produtoInserido)
        }
    })
}

exports.buscarPorId = (id, res) => {
    const produto = req.body
    // Inserir no banco (produto)
    // retornar o produto com o ID
    produtoPersistencia.incluir(produto, (err, produtoInserido) => {
        if (err) {
            return res.status(500).json({ erro: err })
        } else {
            return res.status(201).json(produtoInserido)
        }
    })
}

exports.atualizar = (req, res) => {
    const produto = req.body
    const id = req.params.id

    produtoPersistencia.atualizar(id, produto, (err, produtoAtualizado) => {
        if (err) {
            return res.status(500).json({ erro: err })
        } else {
            if (produtoAtualizado) {
                return res.json(produtoAtualizado)
            } else {
                return res.status(404).json({ erro: "Produto nao encontrado!" })
            }
        }
    })
}


exports.deletar = (req, res) => {
    const id = req.params.id

    produtoPersistencia.deletar(id, (err, produtoDeletado) => {
        if (err) {
            return res.status(500).json({ erro: err })
        } else {
            if (produtoDeletado) {
                return res.status(200).json(produtoDeletado)
            } else {
                return res.status(404).json({ erro: "Produto nao encontrado!" })
            }
        }
    })
}