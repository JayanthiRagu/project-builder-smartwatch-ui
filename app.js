var myDate = new Date(); 
var myDay = myDate.getDay(); 

// Array of days. 
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var today = document.getElementById("day");
today.innerHTML = weekday[myDay];
var time1 = document.getElementById("time1");
time1.innerHTML = myDate.getHours()+":"+myDate.getMinutes();
var time2 = document.getElementById("time2");
time2.innerHTML = myDate.getHours()+":"+myDate.getMinutes();
console.log(myDate.getHours());
console.log(myDate.getMinutes());