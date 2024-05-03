var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9968366989@aA",
    database: "ract"
});

var val={PolicyNo: '12356787', AGE: 34, select_car: 'sedan', Police_avail: 'no', Summary: 'Hi, this was a very bad accident '}

con.connect(function(err) {
  if (err) throw err;
  con.query("INSERT INTO ract.try (Policyno, AGE, Police_avail, select_car) VALUES ('"+val.PolicyNo+"',"+val.AGE+",'"+val.Police_avail+"','"+val.select_car+"')"
  , function (err, result, fields) {

  //con.query("INSERT INTO ract.try (Policyno, AGE, Police_avail, select_car) VALUES ("+val.PolicyNo+", 34, 'no', 'suv')", function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
});

//INSERT INTO `ract`.`try` (`Policyno`, `AGE`, `Police_avail`, `select_car`) VALUES ('123', '34', 'no', 'suv');
//"INSERT INTO ract.try (Policyno, AGE, Police_avail, select_car) VALUES ("+req.body.PolicyNo+","+req.body.AGE+","+req.body.Police_avail+","+req.body.select_car+")";