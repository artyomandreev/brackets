module.exports = function check(str, bracketsConfig) {

    let matching = {};
    let openingBrackets = [];
    let closingBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        matching[bracketsConfig[i][0]] = bracketsConfig[i][1];
        openingBrackets.push(bracketsConfig[i][0]);
        closingBrackets.push(bracketsConfig[i][1]);
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (openingBrackets.includes(str[i])) {
            if (closingBrackets.includes(str[i]) && stack.length > 0) {
                let last = stack.pop();
                if (str[i] !== last) {
                    stack.push(last);
                    stack.push(str[i]);
                }
            } else {
                stack.push(str[i]);
            }
        } else {
            let last = stack.pop();
            if (str[i] !== matching[last]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}

