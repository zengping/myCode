var querystring = require("querystring");

function start(request, response) {
  console.log("Request handler 'start' was called.");

var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function list(request, response) {
    //连接数据库
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'test'
    });

    connection.connect();
    //查询
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) throw err;
        response.write(JSON.stringify(rows));
        response.end();
    });
    //关闭连接
    connection.end();
}

function add(request, response) {
    //连接数据库
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'test'
    });

    connection.connect();
    var postData = "";
    request.addListener("data", function (data) {
        postData += data;
    });
    
    request.addListener("end", function () {
        console.log(postData);
        var query = JSON.parse(postData);
        console.log(query);
        //查询
        connection.query('SELECT * from user', function(err, rows, fields) {
            if (err) throw err;
            response.write(JSON.stringify(rows));
            response.end();
        });
    });
    //关闭连接
    connection.end();
}

exports.start = start;
exports.list = list;
exports.add = add;