var arr = [1,2,3,4,5];
var names = ['jim', 'jack', 'bob'];

arr.forEach(function(i){
  console.log('forEach', i);
});

arr.forEach((i)=>{
  console.log('arrowFunction', i);
});

arr.forEach((i) => console.log('arrowFunc', i));

var returnMe = (i) => i + '!';
console.log(returnMe(1));


var Person = {
  name: 'Adam',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

Person.greet();

var add = (a,b) => a + b;
console.log(add(1,2));

var addState = (a,b) => {
  return a + b;
}

console.log(addState(2,3));
