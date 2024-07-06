/**
 * Esta función calcula el precio total de la orden
 * @param {Array} products cartProduct: es una array de objetos 
 * @returns {number} Total de precio
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
} 