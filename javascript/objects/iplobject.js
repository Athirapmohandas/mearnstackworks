var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]
console.log(point_table);
//print no of team playing in ipl_2k21
console.log("No of teams:",point_table.length);

//group using won points
var w_count={}
point_table.map(team=>team.won in w_count?w_count[team.won].push(team.t_name):w_count[team.won]=[team.t_name])
console.log(w_count);

//group team using points
var team_points={}
point_table.map(team=>team.pts in team_points?team_points[team.pts].push(team.t_name):team_points[team.pts]=[team.t_name])
console.log(team_points);
//print team names only
point_table.forEach(team=>console.log(team.t_name))

//print teamdetails whose points>10
point_table.filter(team=>team.pts>10).forEach(team=>console.log(team))

// is kkr is playing
var is_kkr=point_table.some(team=>team.t_name="kkr")
console.log(is_kkr);

//sort wrt loss desc
point_table.sort((team1,team2)=>team2.loss-team1.loss)
console.log(point_table);

//print team details who have max point
var max_point=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
console.log("Max point",max_point);

//team with max points
var max_pts=point_table.map(team=>team.pts).reduce((pt1,pt2)=>pt1>pt2?pt1:pt2)
point_table.filter(team=>team.pts==max_point).forEach(team=>console.log(team))