const cart = [
  { name: 'Widget', price: 9.95 },
  { name: 'Gadget', price: 22.95 }
];
const names = cart.map(x => x.name);
const price = cart.map(x => x.price);
const discountPrices = price.map(x => x * 0.8);
// ['Widget', 'Gadget']
// [9.95, 22.95]
// [7.96, 18.36]
console.log(names);
console.log(price);
console.log(discountPrices);

// 이제 카드를 map을 이용하여 다시 정의하여 보겠다.
const items = ['Widget', 'Gadget'];
const price2 = [9.95, 22.95];
const cart2 = items.map((x, i) => ({ name: x, price: price2[i] }));
console.log(cart2);
// [{ name: 'Widget', price: 9.95 },
//   { name: 'Gadget', price: 22.95 }]

// ***************** filter *********************
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
  for (let value = 1; value <= 13; value++) {
    cards.push({ suit, value });
  }
}

// 다이아몬드 카드
console.log(cards.filter(c => c.suit === 'D').length);

// 킹 퀸 주니어
console.log(cards.filter(c => c.value > 10).length);

// 하트의 킹 퀸 주니어
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').length);

function cardToString(c) {
  const suit = { H: '\u2665', C: '\u2663', D: '\u2666', S: '\u2660' };
  const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };

  for (let i = 2; i <= 10; i++) values[i] = i;
  return values[c.value] + suit[c.suit];
}

console.log(cards.filter(c => c.value === 2).map(cardToString));
// [ '2♥', '2♣', '2♦', '2♠' ]
