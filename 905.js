var sortArrayByParity = function (A) {
    let swap = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            let temp = A[swap];
            A[swap] = A[i];
            A[i] = temp;
            swap++;
        }
    }

    return A;
};