/*

*/



const Heapsort = (pq) => {
  let n = pq.length;

  const exchange = (arr, x, y) => {
    let temp = arr[x - 1];
    arr[x - 1] = arr[y - 1];
    arr[y - 1] = temp;
  }

  const less = (arr, a, b) => {
    return arr[a - 1] < arr[b - 1];
  }

  const swim = (k) => {
    while (k > 1 && less(pq, Math.floor(k / 2), k)) {
      exchange(pq, k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  const sink = (pq, k, n) => {
    while (2*k <= n) {
      let j = 2*k;
      if (j < n && less(pq, j, j + 1)) {
        j++;
      }
      if (!less(pq, k, j)) {
        break;
      }
      exchange(pq, k, j);
      k = j;

    }
  }

  for (let k = Math.floor(n / 2); k >=1; k--) {
    sink(pq, k, n);
  }
  while (n > 1) {
    exchange(pq, 1, n);
    sink(pq, 1, --n);
  }
}

const input = [1, 5, 3, 2, 6, 8, 7, 9, 0, 4];
Heapsort(input);
console.log(input)