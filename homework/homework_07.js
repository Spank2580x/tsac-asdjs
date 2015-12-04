//rivedi gli ex_1a ...ecc



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

function putInTwoStacks(array)
{
    var even=new Stack();
    var uneven=new Stack();
    var final=new Stack();
    var e;
    var u;
    var result=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
            even.push(array[i]);
        else
            uneven.push(array[i]);
    }
    while(!even.isEmpty() && !uneven.isEmpty())
    {
        e=even.pop();
        u=uneven.pop();
        console.log(e+" * "+u);
        final.push(e*u);
        //final.push(even.pop()*uneven.pop());
    }
    while(!final.isEmpty())
    {
        result+=final.pop();
    }
    return result;
}

function ex_3(array)
{
    return putInTwoStacks(array);
}

//--------------------------------------------------------------------------

function LinkedList()
{
    this.head=null;
    this.size = 0;
}

function ListItem(i,p,n)
{
    this.item=i;
    this.next=n;
    this.prev = p;

}

LinkedList.prototype.getNode = function(index)
{
    var item = this.head;
    for(var i = 0; i < index && item != null; i++)
    {
        item=item.next;
    }
    return item;
}

LinkedList.prototype.getNodeR = function(index)
{
    function nodeR(node, i){
        if(i == index || node == null)
            return node;
        else
            return nodeR(node.next, i + 1);
    }

    return nodeR(this.head, 0);
}

LinkedList.prototype.add=function(index,element) {
    var node = this.getNodeR(index);
    if(node != null){
        var item = new ListItem(element, node.prev, node);
        node.prev = item;
    }else{
        var last = getNodeR(this.size - 1);
        var item = new ListItem(element, last, null);
        last.next = item;
    }
    this.size++;
}

LinkedList.prototype.addItem=function(previousIndex,previousItem,index,element)
{
    if(++previousIndex<index && previousItem.next!=null)
        this.addItem(previousIndex,previousItem.next,index,element);
    else
        previousItem.next=new ListItem(element,previousItem.next);
}


LinkedList.prototype.get=function(index)
{
    var node = this.getNodeR(index);
    if(node != null)
        return node.item;
    else
        return null;
}



function demo()
{
    var l=new LinkedList();
    l.add(0,'a');
    l.add(1,'b');
    l.add(1,'c');
    l.add(5,'d');
    l.add(0,'e');
    console.log(l.get(0));
    console.log(l.get(1));
    console.log(l.get(2));
    console.log(l.get(3));
    console.log(l.get(4));
    console.log(l.get(8));
    console.log(l);
}
//___________________________________________________________________________________________________________
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

function inOrder(tree, callback) {
    if (tree != null) {
        inOrder(tree.l, callback);
        callback(tree.item);
        inOrder(tree.r, callback);
    }
}

function inPreOrder(tree, callback) {
    if (tree != null) {
        callback(tree.item);
        inPreOrder(tree.l, callback);
        inPreOrder(tree.r, callback);
    }
}

function inPostOrder(tree, callback) {
    if (tree != null) {
        inPostOrder(tree.l, callback);
        inPostOrder(tree.r, callback);
        callback(tree.item);
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

function searchNode(nodo, e) {
    if (nodo == null || nodo.item == e)
        return nodo;
    else if (e < nodo.item)
        return searchNode(nodo.l, e);
    else
        return searchNode(nodo.r, e);
}

function main() {
    var albero = new BST();
    albero.add("alberto");
    albero.add("marco");
    albero.add("vasyl");
    albero.add("manuel");
    albero.add("ale giov");
    inOrder(albero.root, function(x) {console.log(x)});
    console.log(searchTree(albero.root, "ale giov"));
    console.log(searchNode(albero.root, "alegiov"));
}

//main();