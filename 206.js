var reverseList = function (head) {
    let temp = head;
    let NextNode;
    let PrevNode = null;

    while (temp) {
        NextNode = temp.next;
        temp.next = PrevNode;
        PrevNode = temp;
        temp = NextNode;
    }

    return PrevNode;
};