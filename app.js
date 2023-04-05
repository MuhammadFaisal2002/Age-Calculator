


//-------------------------AGE CALCULATOR-------------------------------

function calculateAge() {   
    var dateDob = document.getElementById('det').value;
    var monthDob = document.getElementById('mon').value;
    var yearDob = document.getElementById('Year').value;
    var hrDob = document.getElementById('hr').value;
    var currentDate = new Date();
    var d1 = currentDate.getDate();
    var m1 = 1 + currentDate.getMonth();
    var y1 = currentDate.getFullYear();
    var h1 = currentDate.getHours();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(dateDob>d1){
        d1=d1 + month[m1-1];
        m1 = m1 -1;
    }
    if(monthDob>m1){
        m1 = m1 + 12;
        y1=y1-1;
    }
    var d = d1 - dateDob;
    var m = m1 - monthDob;
    var y = y1 - yearDob;
    var h = h1 - hrDob;
    
    
    document.getElementById('hrs').innerHTML = "hours " + h + " | ";    
document.getElementById('days').innerHTML = "days " + d + " | ";
document.getElementById('hours').innerHTML ="months " + m + " | ";
document.getElementById('minutes').innerHTML = "year " + y ;
}

