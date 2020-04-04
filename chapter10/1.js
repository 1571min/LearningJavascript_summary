const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

// const userRoles = new Map();

// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

// userRoles
//   .set(u1, 'User')
//   .set(u2, 'User')
//   .set(u3, 'Admin');

const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin']
]);

console.log(userRoles);

// get Method
console.log(userRoles.get(u1));
console.log(userRoles.get(u2));
console.log(userRoles.get(u3));

//size property

console.log(userRoles.size);
