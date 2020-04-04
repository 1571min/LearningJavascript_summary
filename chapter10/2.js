const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin']
]);

for (const u of userRoles.keys()) {
  console.log(u.name);
}
for (const r of userRoles.values()) {
  console.log(r);
}

for (const ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}
// 위 변수를 분해하여 아래아 같이 표현 가능
for (const [u, r] of userRoles.entries()) {
  console.log(`${u.name}: ${r}`);
}

// 맵의 기본 itterator 는 entries 이다 따라서 생략해서 아래와 같이 사용가능
for (const [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

// delete method 키를 이용해서 삭제

userRoles.delete(u2);
console.log(userRoles.size);
