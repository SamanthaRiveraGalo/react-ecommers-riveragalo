const products = [
    { id: 1, name: 'Nike Air Max SYSTM', stock: 3, price: 68.499 , category: 'hombre',description: 'Originalmente diseñada para el running de alto rendimiento, la amortiguación Max Air brinda comodidad comprobada.',img: 'https://nikearprod.vtexassets.com/arquivos/ids/701118-1000-1000?v=1780702250&width=1000&height=1000&aspect=true' },
    { id: 2, name: 'Nike Air Force Next Nature', stock: 5 , price: 84.000 , category: 'mujer', description: 'La amortiguación Nike Air, diseñada originalmente para el básquetbol de alto rendimiento, agrega comodidad y ligereza.', img: 'https://nikearprod.vtexassets.com/arquivos/ids/498805-800-800?v=638151123208670000&width=800&height=800&aspect=true'},
    { id: 3, name: 'Nike Dunk Low SE', stock: 4 , price: 89.999 , category: 'hombre', description: 'La parte superior de cuero envejece hasta alcanzar una suavidad perfecta y cuenta con una confección duradera que recuerda el básquetbol de los 80.', img: 'https://nikearprod.vtexassets.com/arquivos/ids/681854-800-800?v=638224575122130000&width=800&height=800&aspect=true' },
    { id: 4, name: 'Nike Air Max 90 Futura', stock: 4 , price: 99.999 , category: 'mujer', description: 'El acolchado suave alrededor del tobillo se combina con una amortiguación Air confiable para brindarte comodidad de primer nivel. Es divertido, cómodo, deportivo y cualquier otra cosa que desees', img: 'https://nikearprod.vtexassets.com/arquivos/ids/699351-800-800?v=638229667793970000&width=800&height=800&aspect=true'},
    { id: 5, name: 'Nike Air Max AP', stock: 5 , price: 59.999 , category: 'mujer', description: 'Diseñada originalmente para el running de alto rendimiento, la innovadora unidad Air de largo completo tiene un perfil más bajo para brindar un estilo elegante y agrega una nueva sensación que tienes que probar.', img: 'https://nikearprod.vtexassets.com/arquivos/ids/456610-800-800?v=638149341826470000&width=800&height=800&aspect=true'},
    { id: 6, name: 'Nike Downshifter 12', stock: 3, price: 47.999 , category: 'hombre',description: 'Brinda un ajuste con soporte y una pisada estable. Además, la sensación de ligereza posibilita una transición más fluida del entrenamiento a las actividades diarias. Comienza tu recorrido. Amárrate las agujetas y comienza a correr.',img: 'https://nikearprod.vtexassets.com/arquivos/ids/317650-800-800?v=638128486031170000&width=800&height=800&aspect=true' }
]

export const mFetch = (pid) => new Promise((res, rej) => {
   
    setTimeout(() => {
        res(pid ? products.find(product => product.id === pid) : products)
    }, 1000)
}
)