// // // Task 37
// // // Large shirts: Modify the make_shirt() function so that  shirts are large by default with a message that reads I love typescript
// // // Make a large shirt and a medium shirt with the default message , and a shirt od any size  with a different message..
function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log('you have order a ${size}, shirt that says $(text)');
}
// makeShirt();
// makeShirt('medium')
// different message
makeShirt('small', 'I need a big shirt to wear');
console.log("you have order a small, shirt thart says I need a big shirt to wear");
