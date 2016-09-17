

window.onload = function(){

var dates = [
  {"day": "Oct 1 (Sat)", "time": "9:00 - 12:00"},
  {"day": "Oct 8 (Sat)", "time": "14:00 - 16:00"},
  {"day": "Oct 15 (Sat)", "time": "14:00 - 16:00"},
  {"day": "Oct 22 (Sat)", "time": "9:00 - 12:00"},
  {"day": "Oct 29 (Sat)", "time": "12:00 - 14:00"}
];

function playTime(schedule){
  for(var i = 0; i<schedule.length; i++){
   console.log(schedule[i]);
   console.log(schedule[i].day);
   console.log(schedule[i].time);

   var dateBox = document.createElement('div');
   dateBox.className = "date";
   current.appendChild(dateBox);

   var dayBox = document.createElement('div');
   dayBox.className = "days";
   dayBox.innerHTML = schedule[i].day;
   dateBox.appendChild(dayBox);

   var timeBox = document.createElement('div');
   timeBox.className = "times";
   timeBox.innerHTML = schedule[i].time;
   dateBox.appendChild(timeBox);




  }

}

playTime(dates);


};