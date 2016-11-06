class A {
  constructor() {
    console.log('A instancing');
  }
}

let instance = null;

A.getInstatnce = () => {
  if (instance === null) {
    instance = new A();
  }
  return instance
}

export default A;
