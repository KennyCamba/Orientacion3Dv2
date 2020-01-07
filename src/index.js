var path = require("path");
var cp = require('child_process')
var exec = require('child_process').execFile;
var cubo = document.getElementById("cubo");
var fs = require('fs');
var current = null;

cubo.addEventListener("click", function(e){
    current = exec(path.join(path.resolve(), "exes", "Cubo", "cubo.exe"), {
        cwd: path.join(path.resolve(), "exes", "Cubo")
    }, function(err, data) {  
        console.log(data);    
        console.log(err);      
    }).pid;
});


var esfera = document.getElementById("esfera");

esfera.addEventListener("click", function(e){
    current = exec(path.join(path.resolve(), "exes", "Esfera", "Esfera.exe"), {
        cwd: path.join(path.resolve(), "exes", "Esfera")
    }, function(err, data) {  
        console.log(data);    
        console.log(err);      
    }).pid;
    
});

var avion = document.getElementById("avion");

avion.addEventListener("click", function(e){
    current = exec(path.join(path.resolve(), "exes", "Avion", "MPUTeapot.exe"), {
        cwd: path.join(path.resolve(), "exes", "Avion")
    }, function(err, data) {  
        console.log(data);    
        console.log(err);      
    }).pid;
});

var salir = document.getElementById("salir");

salir.addEventListener("click", function(e){
    window.close();
});