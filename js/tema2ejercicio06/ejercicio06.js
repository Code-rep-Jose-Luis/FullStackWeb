'use strict'


let a=[];
a.push(1);
a.push(2);
a.push(2);
a.unshift(3);
a.unshift(4);
a.push(1);
document.write("<p>"+a.join("==>")+"</p>");
a.splice(3,3);
document.write("<p>"+a.join("==>")+"</p>");
a.splice(3,0,10,20,30);
document.write("<p>"+a.join("==>")+"</p>");
a.reverse();
document.write("<p>"+a.join("==>")+"</p>");
a.sort(function(a,b){
    return a-b
}
);
document.write("<p>"+a.join("==>")+"</p>");

