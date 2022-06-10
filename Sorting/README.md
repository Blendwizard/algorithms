## Sorting Algorithms Summary

| Algorithm | In Place? | Stable? | Worst | Average | Best | Remarks
| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| Selection | Yes |  | N^2 / 2 | N^2 / 2 | N^2 / 2 | N Exchanges
| Insertion | Yes | Yes | N^2 / 2 | N^2 / 4 | N | use for small N or partially ordered
| Shell | Yes |  | ? | ? | N | tight code, subquadratic
| Merge |  | Yes | N lg N | N lg N | N lg N | N log N guarantee, stable
| Quick | Yes | | N^2 / 2 | 2 N ln N | N lg N | N log N probabilistic guarantee, fastest in practice
| 3-Way Quick | Yes | | N^2 / 2 | 2N ln N | N | improves quicksort in presence of duplicate keys
| ??? | Yes | Yes | N lg N | N lg N | N lg N | holy sorting grail