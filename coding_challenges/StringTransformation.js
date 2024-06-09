function StringTransformation(input) {
    const length = input.length;
    let answer = '';

    if (length % 3 === 0) {
        answer = input.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        answer = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (length % 15 === 0) {
        answer = input.split('').reverse().join('');
        answer = answer.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (answer === '') {
        answer = input;
    }

    return answer;
}


console.log(StringTransformation("Hamburger"));
console.log(StringTransformation("Pizza"));
console.log(StringTransformation("Chocolate Chip Cookie"));
