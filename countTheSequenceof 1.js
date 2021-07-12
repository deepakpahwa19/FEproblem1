function getMaxCount(arr) {
    let current = 0,
        count = 0,
        max = 0;

    for (let i = 0, j = 0; j < arr.length; j++) {
        if (arr[j] === 0) {
            if (count < 2) {
                count++;
                current = j;
            } else {
                max = Math.max(j - i, max);
                i = current;
                count = 1;
            }
        } else {
            max = Math.max(j - i, max);
        }
    }

    return max;
}
console.log(getMaxCount([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]));
console.log(getMaxCount([1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]));
console.log(getMaxCount([1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1]));
console.log(getMaxCount([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0]));
