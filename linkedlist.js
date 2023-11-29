class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
const n2=new Node(100);

n2.next = new Node(89);
const n3 = new Node(84, new Node(90))

n2.next.next = n3

var current_node = n2
while(current_node != null){
    console.log(current_node)
    console.log(current_node.data)  
    current_node = current_node.next
}