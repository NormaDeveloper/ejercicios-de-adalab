
// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.


const people = 9;
const totalBill= 128;
const anaExtra = 2;
const eurosPerPerson = totalBill / people;
const eurosAna = eurosPerPerson + anaExtra;


console.log(`Cada uno pagará ${eurosPerPerson.toFixed(2)} € pero Ana debe pagar ${eurosAna.toFixed(2)}€`)



