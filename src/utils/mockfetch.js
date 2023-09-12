const products = [
    { id: 1, name: 'zapatilla', stock: 3, price: 500,category: 'hombre',description: 'lorem',img: 'https://nikearprod.vtexassets.com/arquivos/ids/701118-1000-1000?v=1780702250&width=1000&height=1000&aspect=true' },
    { id: 2, name: 'zapatilla', stock: 5, price: 200, category: 'mujer', description: 'lorem', img: 'https://nikearprod.vtexassets.com/arquivos/ids/498805-800-800?v=638151123208670000&width=800&height=800&aspect=true'},
    { id: 3, name: 'zapatilla', stock: 4, price: 800, category: 'hombre', description: 'lorem', img: 'https://nikearprod.vtexassets.com/arquivos/ids/498841-1000-1000?v=1780701490&width=1000&height=1000&aspect=true' },
    { id: 4, name: 'zapatilla', stock: 4, price: 800, category: 'mujer', description: 'lorem', img: 'https://nikearprod.vtexassets.com/arquivos/ids/456610-800-800?v=638149341826470000&width=800&height=800&aspect=true'}
]

export const mFetch = (pid) => new Promise((res, rej) => {
   
    setTimeout(() => {
        res(pid ? products.find(product => product.id === pid) : products)
    }, 1000)
}
)