function Stack(){
    this.array = [];
}

Stack.prototype.push = function(e) {
    this.array.push(e);
}
Stack.prototype.pop = function(e){
    return this.array.pop(e);
}

Stack.prototype.peek = function(e){
    return this.array[this.array.length - 1];
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}


/*function dectobin(a)
{
    var b=parseInt(a);
    var c="";
    while(b>=1)
    {  if(b%2==0)
        {c="0"+c;}
       else
        {c="1"+c;}
       b=b/2;
    }
    return parseInt(c);
}*/
function dectobin(a)
{
    var stack = new Stack();
    var string="";
    var b=parseInt(a);


    while(b>=1)
    {
        alert(b%2);
        if(b%2==1)
        {stack.push("1");}
       else
        {stack.push("0");}

        b=b/2-(b%2/2);
    }

    while(!stack.isEmpty())
    {
        string+=stack.pop().toString();
    }
    return string;
}
