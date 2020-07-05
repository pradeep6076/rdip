dnum="";
snum="";
op=0;
qop=0;
caluclationfinished=false;



function cals(n1){
var dis=document.getElementById("display");

    if ((dis.value == "") && n1 == "0") {
    
      return;
    }
else if (caluclationfinished== true) {
        dis.value = n1;
        caluclationfinished = false;
    }
else
{

return cal.ans.value+=n1;
}

}



function caln()
{
   dnum="";
   snum="";
   op=0;
qop=0;
   return  cal.ans.value="";
}




function operation(com)
{
var dis=document.getElementById("display");
dnum=dis.value;
evaldis=eval(dnum),
evalstored=eval(snum);
if(qop==0)
{
snum=dis.value;
}
else if(qop==1)
{
snum=evalstored+evaldis;
}
else if(qop==2)
{
snum=evalstored-evaldis;
}
else if(qop==3)
{
snum=evalstored * evaldis;
}
else if(qop==4)
{
snum=evalstored/evaldis;
}
else if(qop==5)
{
snum=evalstored%evaldis;
}
if(com=='add')
op=1;
else if(com=='minus')
op=2;
else if(com=='mul')
op=3;
else if(com=='div')
op=4;
else if(com=='percent')
op=5;


qop=op;
return cal.ans.value="";

}




function calu()
{
var dis=document.getElementById("display");
dnum=dis.value;
evaldis=eval(dnum);
evalstored=eval(snum);
if(op!=0)
{
caluclationfinished=true;
if(op==1)
addition(evalstored,evaldis);
if(op==2)
subtraction(evalstored,evaldis);
if(op==3)
multiplication(evalstored,evaldis);
if(op==4)
division(evalstored,evaldis);
if(op==5)
percentage(evalstored,evaldis);
}
}


1


function addition(evalstored,evaldis)
{
var s=evalstored+evaldis;
op=0;
qop=0;
dnum="";
snum="";
return cal.ans.value=s;
}


2

function subtraction(evalstored,evaldis)
{
var s=evalstored-evaldis;
op=0;
qop=0;
dnum="";
snum="";
return cal.ans.value=s;
}


3

function multiplication(evalstored,evaldis)
{
var s=evalstored * evaldis;
op=0;
qop=0;
dnum="";
snum="";
return cal.ans.value=s;
}

4

function division(evalstored,evaldis)
{
var s=evalstored/evaldis;
op=0;
qop=0;
dnum="";
snum="";
return cal.ans.value=s;
}

5

function percentage(evalstored,evaldis)
{
var s=(evalstored/100)*evaldis;
op=0;
qop=0;
dnum="";
snum="";
return cal.ans.value=s;
}
6

function abs()
{
                 var y = document.getElementById("display").value;
  if (y < 0) {
    y = y * -1;
  }
return cal.ans.value=y;


}


7
function sqrts()
{
var  y = document.getElementById("display").value;
 var t=Math.sqrt(y)
var p=Number.isInteger(t);
if(p==true)
return cal.ans.value=t;
else
return cal.ans.value=t.toFixed(3);
}





function validate() {

  var name = document.getElementById("name").value;
  if (!isNaN(name.charAt(0))) {
    alert("not valid");
  }



  var x = document.getElementById("email").value;
var email=/^\w+([\.-]?\w+)*@\w*(\.\w{2,3})$/;  
  
  if(x.match(email))   
{   

}  
else  
{   
alert("Wrong...!") ; 
    return false;
} 



  var num=document.getElementById("no").value;
if (isNaN(num)){
  alert("not valid phn number");
  return false;
}
else if(num.length==10)
{
 
  }
else{
 alert("not valid");
  return false;
}


}










function palindrome()
{
  
  var str =document.getElementById("pal").value;

    var s= 0; 
    var e= str.length - 1; 
  
    
    while (e> s) 
    { 
        if (str[s++] != str[e--]) 
        { 
             alert("it is not  palindrome");
              return false;
        } 
    } 
      
alert("it is a palindrome");
return true;
}
 


function anagram()
{
var str=document.getElementById("an1").value;
var word=document.getElementById("an2").value;


var str1=str.toLowerCase();
var word1=word.toLowerCase();


var p=str1.split(" ").join("");
var s=p.split("").sort();
var t=s.join("");
  
var p=word1.split(" ").join("");
var s=p.split("").sort();
var t2=s.join("");
var n=t2.localeCompare(t);

if(n!=0)
{
alert("not a anagram");
return false;

}
else
{
alert("it is a anagram");
return true;
}
}




function start()
{
  document.getElementById("i1").value = Math.floor(Math.random() * 1000);
  document.getElementById("i2").value = Math.floor(Math.random() * 1000);
  var n1= document.getElementById("i1").value;
  var n2= document.getElementById("i2").value;
  var x;

  if (n1>= 0 && n1<= 250) {
    x=1;
  }

 else  if (n1 > 250 && n1 <= 500) {
    x=2;
  }

  else if (n1> 500 && n1<= 1000) {
    x=3;
  }
var y;

  if (n2>= 0 && n2<= 250) {
    y=1;
  }

 else  if (n2 > 250 && n2 <= 500) {
    y=2;
  }

  else if (n2> 500 && n2<= 1000) {
    y=3;
  }


if(x==y)
{
alert("tie");
return false;
}
else
{
  if (x == 1 && y == 2) {
    alert("Inputs are 'Human' and 'Cockroach',so 'Human' survive.");
    return true;
  }
 else  if (x == 2 && y == 1) {
    alert("Inputs are  'Cockroach' and  'Human',so 'Human' survive.");
    return true;
  }
else  if (x == 1 && y == 3) {
    alert("Inputs are   'Human' and 'Bomb',so 'Bomb' survive.");
    return true;
  }
 else  if (x== 3 && y== 1) {
    alert("Inputs are   'Bomb' and 'Human',so 'Bomb' survive.");
    return true;
  }

 else  if (x == 2 && y == 3) {
    alert("Inputs are   'Cockroach' and 'Bomb',so 'Cockroach' survive.");
    return true;
  }
  if (x== 3 && y== 2) {
    alert("Inputs are   'Bomb' and 'Cockroach',so 'Cockroach' survive.");
    return true;
  }
}
}

















