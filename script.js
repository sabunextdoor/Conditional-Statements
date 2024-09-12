let a=10
var b=20
var c=null;
var d
document.write("the value of a is"+ a+"<br>")
document.write("the value of a is" + b + "<br>")
document.write("the value of a is" + c + "<br>")
document.write("the value of a is" + d + "<br>")

function greet(){
    var greeting;
    var time=new Date().getHours()
    if (time<10){
        greeting="Good Morning"
    }
    else if(time<17){
        greeting="Good Day"
    }
    else{
        greeting="Good Evening"
    }
document.write("the current time is"+ time+"the greeting is"+ greeting)
}