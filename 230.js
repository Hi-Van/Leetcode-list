var kthSmallest = function (root, k) {
    let values = [];
    let curr = this.root;
    let found = k;

    while (curr && values.length < k) {
        if (curr.left) {
            curr = curr.left;
        }

        curr.val
    }

    return;
};