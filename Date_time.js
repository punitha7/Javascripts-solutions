var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var prepand = (hour >= 12)? "PM" : "AM";
if((hour >= 12) && (prepand == "PM"))
{
  if((seconds === 0)&& (minutes === 0))
  {
    hour = 12;
    prepand = 'noon';
  }
}
if((hour <= 12) && (prepand == "PM"))
{
  if((seconds === 0)&& (minutes === 0))
  {
    hour = 12;
    prepand = 'Midnight';
  }
}

console.log("Today is "+" "+daylist[day]);
console.log("Current time is  "+hour+":"+minutes+" "+prepand+" "+seconds+"seconds");
