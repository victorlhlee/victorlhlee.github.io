console.log("hi");

window.onload = function(){

var dates = [
  {"day": "Sept 3 (Sat)", "time": "9:00 - 14:00"},
  {"day": "Sept 17 (Sat)", "time": "9:00 - 14:00"},
  {"day": "Sept 19 (Mon)", "time": "9:00 - 12:00"},
  {"day": "Sept 22 (Thur)", "time": "12:00 - 14:00"},
  {"day": "Sept 24 (Sat)", "time": "9:00 - 12:00"}
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