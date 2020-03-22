const o = {
  name: 'Wallace',
  speak() {
    return `My name is ${this.name}`;
  }
};

// 객체에서 this를 호출하면 호출하는 객체에 묶인다.

const { speak } = o;
speak === o.speak;
speak(); // this가 window에 속하기 때문에 window 의 name은 정의 되어있지 않다

// 함수의 내부로 들어가서 다시 정의된 함수는 e객체의 this를 잃어버린다 따라서 this를 다시 지정해준다
const e = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};

e.greetBackwards();
