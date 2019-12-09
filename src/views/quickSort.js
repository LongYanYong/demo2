function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const data = {
            left: [],
            right: []
        },
        q = arr[0];
    for (let i = 1, l = arr.length; i < l; i++) {
        data[arr[i] > q ? 'right' : 'left'].push(arr[i]);
        console.log(data.left);
        console.log(data.right);
        debugger;
    }
    return [...[], ...quickSort(data.left), ...[q], ...quickSort(data.right)]
}
quickSort([1, 2123, 123, 31, 2, 33, 12])
