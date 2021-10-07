var weather_data=[
    {district:"tvm",temp:30},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
    {district:"tvm",temp:29},
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]

// var is_tvm=weather_data.some(data=>data.district=="apy")
// console.log(is_tvm);
// console.log(weather_data);
//------------------------------------------------------------
// To print district name with highest temp
var forecast={},total=0;
for(let data of weather_data ){
    let district_name=data.district
    let cur_temp=data.temp
   if(district_name in forecast ){
     let old_temp=forecast[district_name];
     total++;
     forecast.totals=total;
     if(cur_temp>old_temp){
         forecast[district_name]=cur_temp
     }
   }
   else{
       forecast[district_name]=cur_temp;
       forecast.totals=total
   }
}
console.log(forecast);

//sort wrt temp
// weather_data.sort((temp1,temp2)=>temp1.temp-temp2.temp)
// console.log(weather_data);

//console.log(Object.entries(forecast).sort((temp1,temp2)=>temp1[1]-temp2[1]));

