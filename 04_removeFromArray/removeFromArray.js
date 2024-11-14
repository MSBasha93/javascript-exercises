const removeFromArray = function (array, ...elementsToRemove) {

    for (let i = 0; i < elementsToRemove.length; i++) {
        if (array.includes(elementsToRemove[i])) {
            array = array.filter(x => x !== elementsToRemove[i]);
        }

    }
    return array;
}



// Do not edit below this line
module.exports = removeFromArray;
