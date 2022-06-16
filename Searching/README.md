Symbol tables are a key-value pair abstraction.

To implement a symbol table, we define an underlying data structure then specify algorithms for insert, search, and others to create and
manipulate the data structure.

The implementation contains 2 fundamental operations:
1. Insert a value with a specified key.
2. Given a key, search for the corresponding value.

Symbol tables are also sometimes called "dictionaries" (given a word [key], we can find its definition [value]) or indices (as in a textbook).

Symbol tables are used in a wide variety of applications (web search, file sharing, compilers, genomics, file system).
Example:
DNS Lookup: Insert URL with specified IP address. Then given a URL, find corresponding IP address.

Easy implementation -> Associative array abstraction: Associate 1 value with each key. a[key] = val.

A class-based implementation has the following methods:
- put
- get
- delete
- contains
- isEmpty
- size
- keys

Conventions:
- Values are not null.
- Method get() returns null if key not present.
- Method put() overwrites old value with new value.

Intended Consequences:
- Easy to implement contains().
- Can implement lazy version of delete().

Keys & Values:
Value type -> Any generic type.
Key type -> 3 possible assumptions:
1. Keys are Comparable, using compareTo() (Note: we have largely ignored custom specific Comparable types so far so this can be ignored; see text).
2. Assume keys are any generic type, use === to test equality.
2. Assume keys are any generic type, use === to test equality; use a hashing function to scramble key (more on this later).

Best Practices: Use immutable types for symbol table keys (language-specific).

The following elementary ST implementations show how we can implement easy STs but with much less efficiency, leading us to better solutions.
Elementary Symbol Tables Summary:
- Sequential Search (unordered list / linked list)
Guarantee: search = N; insert = N.
Average Case: search = N/2; insert = N.

- Binary Search (ordered array)
Guarantee: search = lg N; insert = N.
Average Case: search = lg N; insert = N/2.

Challenge: Find more efficient implementation.