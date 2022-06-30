let promise = new Promise(function(resolve, reject) {
     setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Just Married...');
        } else {
            reject('Sorrry it\'s me')
        }
     }, 3000)
});

console.log(typeof promise);
console.log(promise);

promise
    .then((result) => {
    console.log(result);
    })
    .catch((reason) => {
    console.log(reason);
    });