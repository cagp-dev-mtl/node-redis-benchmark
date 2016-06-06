var http = require('http');
var express = require('express');
var router = express();
var server = http.createServer(router);
var Redis = require('ioredis'),  
    redis = new Redis();    

function MHGETALL_P(keys, cb) {
    var pipeline = redis.pipeline();

    keys.forEach(function(key, index){
        pipeline.hgetall(key);
    });

    pipeline.exec(function(err, result){
        cb(err, result);
    });
}

function MHGETALL(keys, cb) {
    redis.multi({pipeline: false});

    keys.forEach(function(key, index){
        redis.hgetall(key);
    });

    redis.exec(function(err, result){
        cb(err, result);
    });
}

// ENDPOINT: REDIS SIMPLE PIPELINE
router.get('/', function (req, res) {
    var result = res;
    redis.sort("products", "BY", "product:*->ca", "LIMIT", 1, 60, function (err, replies) {
      
      ids = [];
      replies.forEach(function (reply, index) {
        ids.push("product:" + reply);
      });
      
      MHGETALL_P(ids, function(err, arr) {  
          res.end(JSON.stringify(arr));
      });
    });
});

// ENDPOINT: REDIS MULTIPIPE
router.get('/redis-multi-pipe', function (req, res) {
    redis.sort("products", "BY", "product:*->ca", "LIMIT", 1, 60, function (err, replies) {
      ids = [];
      
      replies.forEach(function (reply, index) {
        ids.push("product:" + reply);
      });      
      
      MHGETALL(ids, function(err, arr) {  
          res.end(JSON.stringify(arr));
      });      
    });
});

// ENDPOINT: REDIS SIMPLE CALL
router.get('/redis-simple', function (req, res) {
    
    redis.sort("products", "BY", "product:*->ca", "LIMIT", 1, 60, function (err, replies) {
      replies.forEach(function (reply, index) {
          redis.hgetall("product:" + reply, function (err, obj) {
            console.dir(obj)
          })
      });
    });
    res.end("test");
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Application server listening at", addr.address + ":" + addr.port);
});
