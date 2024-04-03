const random1 = ['cow', 'man', 'bird', 'woman', 'döner', 'cat', 'football player', 'magician', 'dancer', 'bison'];
let pronouns = '';
const random2 = ['poops his pants', 'eats a döner', 'cries while sleeping', 'fights a bull', 'thinks of a joke', 'fixes a lightbulb', 'marries a cat', 'proposes to a girl', 'has an aggresive outburst'];
const random3 = ['is embarassed', 'says nothing', 'thinks: what the hell', 'calls a doctor', 'jumps off of a bridge', 'initiates a fight', 'cancels the plans for tonight']
const randomArt = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '~(‾▿‾)~', '( ͡° ͜ʖ ͡°)', 'ಠ_ಠ']
const randomReason = ''

let i = Math.floor(Math.random() * random1.length);
let j = Math.floor(Math.random() * random2.length);
let k = Math.floor(Math.random() * random3.length);
let l = Math.floor(Math.random() * randomArt.length)
let ranOne = random1[i];
let ranTwo = random2[j];
let ranThree = random3[k];
let ranArt = randomArt[l]


const randomJoke = () => {
    if (ranOne === 'cow' || ranOne === 'bird' || ranOne === '' || ranOne === 'döner' || ranOne === 'cat' || ranOne === 'bison') {
        pronouns = 'It'
    } else if (ranOne === 'man' || ranOne === 'football player' || ranOne === 'magician') {
        pronouns = 'He'
    } else if (ranOne === 'woman' || ranOne === 'dancer') {
        pronouns = 'She'
    }

    if (ranThree === 'is embarassed') {
        randomReason = 'can not be embarrased!'
    } else if (ranThree === 'says nothing') {
        randomReason = 'does not know how to speak!'
    } else if (ranThree === 'thinks: what the hell') {
        randomReason = 'can not think!'
    } else if (ranThree === 'calls a doctor') {
        randomReason = ' doesnt have a phone!'
    } else if (ranThree === 'jumps off of a bridge') {
        randomReason = 'can not jump, its fat!'
    } else if (ranThree === 'initiates a fight') {
        randomReason = 'can not fight!'
    } else if (ranThree === 'cancels the plans for tonight') {
        randomReason = 'does not have any plans!'
    }
    return `What does a ${ranOne} do when ${pronouns} ${ranTwo}? ${pronouns} ${ranThree}!! Do you get it?! It's funny because the ${ranOne} ${randomReason} ${ranArt} `
}

console.log(randomJoke())