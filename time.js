var HOUR = 9;
var MINUTE = 50;
var PERIOD = 'AM';
if (MINUTE > 30 && PERIOD == 'AM')
console.log (" It's almost ", HOUR+1 , "in the morning")
else
  if ( MINUTE > 30 && PERIOD!='AM')
 console.log (" It's almost ", HOUR+1 , "in the evening")
else
  if (MINUTE < 30 && PERIOD == 'AM')
    console.log("It is just after " ,HOUR-1,  "in the morning")
else
  console.log("It is just after ", HOUR-1,  "in the evening")
