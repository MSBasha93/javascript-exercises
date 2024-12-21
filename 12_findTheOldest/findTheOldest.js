const findTheOldest = function(arr) {
    const todayDate = new Date().getFullYear();
    
    arr.sort((a,b) => {
        const ageA = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : todayDate - a.yearOfBirth;
        const ageB = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : todayDate - b.yearOfBirth;
        return ageB - ageA;
    });
    
    return arr[0]; // Return the entire person object
};

// Do not edit below this line
module.exports = findTheOldest;

