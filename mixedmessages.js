/*This is a Codecademy project called Mixed Messages. The aim is to produce a webpage that generates a randomised message at the click of a button.
There needs to be 3 pieces of data in each message generated.

My inspiration is the Nintendo Wii 'Today and Tomorrow' Channel so I'll be doing a horoscope type message.
The message will be "You are having ____ luck. Your lucky colour is _____ and today you should ____."
*/



const typeOfLuck = ["very good", "good", "average", "bad", "very bad"];
const colour = ["red", "blue", "yellow", "green", "orange", "purple", "pink", "brown", "beige", "white", "grey", "black"];
const activity = ["take a walk", "clean the house", "bake a treat", "read a book", "learn a new skill", "craft something", "relax", "call someone", "visit a new place"];

const generateMessage = () => {
    let a = Math.floor(Math.random()*5);
    let b = Math.floor(Math.random()*12);
    let c = Math.floor(Math.random()*9);

    document.getElementById("response").innerHTML = `You are having ${typeOfLuck[a]} luck. Your lucky colour is ${colour[b]} and today you should ${activity[c]}.`

    //return `You are having ${typeOfLuck[a]} luck. Your lucky colour is ${colour[b]} and today you should ${activity[c]}.`
}

console.log(generateMessage());