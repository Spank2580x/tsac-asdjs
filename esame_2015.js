function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}


var a=["5070","534","5070","5070"];
var b=initialArray();

//Esercizio Ricorsione (15 punti)
//__________________________________________________________________________________________________________-
function countval(myarray) {

    if (myarray.length == 0) {
        return 0;
    }
    else if(  myarray[0] != 5070){
        return countval(myarray.slice(1));
    }else {
        return 1 + countval(myarray.slice(1));
    }
}
console.log(countval(b));

//Esercizio filter/map/reduce (15 punti)
//_________________________________________________________________________________________________________________________
function positivipari(value){
  if(value>=0&&value%2==0)
      return true;
}
function fmr(myarray){
    var valore=0;
   valore=  myarray.filter(positivipari).map(function(num) {return num * num;}).reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
    return Math.sqrt(valore);
}
console.log(fmr(b));


//______________________________________________________________________________________________________
//Esercizio Stack (25 punti)
function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    //this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}
var str="((2+3)*4)";
function evaluateExpression(expr){
    var V=new Stack();
    var S=new Stack();
    for (var i=0;i<expr.length;i++)
    {
        if(expr[i]=='('||expr[i]=='+'||expr[i]=='-'||expr[i]=='*'||expr[i]=='/') {
            S.push(expr[i]);
        }
        if(expr[i]=='0'||expr[i]=='1'||expr[i]=='2'||expr[i]=='3'||expr[i]=='4'||expr[i]=='5'||expr[i]=='6'||expr[i]=='7'||expr[i]=='8'||expr[i]=='9')
        {
            V.push(expr[i]);
        }
        if(expr[i]==')'){
            var op = S.pop();
            S.pop();
            var a= V.pop();
            var b= V.pop();
            var res=0;
            if(op=='+') {
                res=b+a;
                V.push(res);
            }
            if(op=='-') {
                res=b-a;
                V.push(res);
            }
            if(op=='*') {
                res=b*a;
                V.push(res);
            }
            if(op=='/') {
                res=b/a;
                V.push(res);
            }
        }
    }
}
//console.log(evaluateExpression(str));
//_________________________________________________________________________________________________
//ESERCIZIO Tree (15 punti)

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode);
    } else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function inOrder(tree) {
    if (tree != null) {
        inOrder(tree.l);
        console.log(tree.item);
        inOrder(tree.r);
    }
}


function searchTree(node, e) {
    if (node == null) {
        return false;
    }

    if (e == node.item) {
        return true;
    } else {
        if (e < node.item) {
            return searchTree(node.l, e);
        } else if (e > node.item) {
            return searchTree(node.r, e);
        }
    }
}

var alb=new BST();
for (var i=0;i< b.length;i++)//b e' generato con la famosa funzione
{
    alb.add(b[i]);
}
inOrder(alb);

function searchMax(tree)
{
 if(tree.length==0)
 return 0;
/* if()*/

}
//_________________________________________________________________________________________________