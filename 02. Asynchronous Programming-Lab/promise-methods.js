let alwaysResolvingPromise = Promise.resolve('YES');
let alwaysRejectingPromise = Promise.reject('Reason');

alwaysResolvingPromise
    .then((res) => console.log(res))
    .catch((err) => console.log('Never Used'));

alwaysRejectingPromise
    .then((res) => console.log('Never Used'))
    .catch((err) => console.log('No'));


let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('YES2')
]);

multiplePromises
    .then((res) => {
        console.log(res);
    }); // (2) ['YES', 'YES2']

let multiplePromises2 = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('YES2'),
    alwaysRejectingPromise,
]);

multiplePromises2
    .then((res) => {
        console.log(res);
    }); // Error


// allSettld
// race
// finally