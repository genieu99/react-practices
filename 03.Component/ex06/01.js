import fs from 'fs';
import update from "react-addons-update";

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));
const updateOrderProducts1 = order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루 양말',
    price: 2000,
    amount: 1
});
console.log(order.products, updateOrderProducts1, order.products === updateOrderProducts1);



console.log("== Sol1 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducts2 = order.products.concat({
    no: 'c002-003',
    name: '블루 양말',
    price: 2000,
    amount: 1
});
console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts2);



console.log("== Sol2 ========================================");
order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducts3 = [...order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
}];
console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts2);


const data = [{no:10, status: 'Done'}, {no:20, status: 'Doing'}, {no:11, status: 'Doing'}, {no:10, status: 'Todo'}]

const cards = data.filter(e => e.status === 'Doing');
console.log(cards);