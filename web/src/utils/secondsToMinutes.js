

function secondsToMinutesToHours(seconds){
    let hours = 0;
    let minutes = parseInt(seconds/60);
    seconds = parseInt(seconds%60);
    if(minutes>60){
        hours = parseInt(minutes/60);
        minutes = parseInt(minutes%60);
        if(hours<10){
            hours = '0'+hours
        }
    }
    if(minutes<10){
        minutes = '0'+minutes
    }
    if(seconds<10){
        seconds = '0'+seconds
    }

    if(hours===0){
        return minutes+':'+seconds;
    }
    return hours+':'+minutes+':'+seconds;
}

export default secondsToMinutesToHours;