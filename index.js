// code your solution here
function superbowlWin(arr){
    const winner = arr.find((obj) => {
        return obj.result === 'W';
    });
    return winner && winner.year;
}