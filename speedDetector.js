//2. speed detector 
function speedDetector(speed) {
    //defining variables 
    const speedLimit = 70;
    const km = 5;
    
    if (speed <= speedLimit) {
        return 'Ok';
        //if the speedLimit is is greater than the speed then 'ok' will be returned
    } else {
        const points = Math.floor((speed - speedLimit) / km);
        //definig driving points and and creating a math caluation to find out the kph
        if (points >= 12) {
            return 'License suspended';
            //points are greater than or equal to 12 License suspended will be  returned
        } else {
            return 'Points: ' + points;
            //if not current amount of points will be returned 
        }
    }
}
console.log(speedDetector());