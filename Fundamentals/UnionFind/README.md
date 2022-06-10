Dynamic Connectivity

The input is a sequence of pairs of integers, where each integer represents an object of some type and we are to interpret the pair (p,q) as meaning p is connected to q.
We assume "is connected to" is an equivalence relation:
・Reflexive: p is connected to p.
・Symmetric: if p is connected to q, then q is connected to p.
・Transitive: if p is connected to q and q is connected to r,
  then p is connected to r.

Goal: to write a program to filter out extraneous pairs from the sequence: When the program reads a pair (p, q) from the input, it should write the pair to the output only if the pairs it has seen to that point do not imply that p is connected to q. If the previous pairs do imply that p is connected to q, then the program should ignore the pair p q and proceed to read in the next pair.

Given a set of N objects:
・Union command: connect two objects.
・Find/connected query: is there a path connecting the two objects?

Connected components: Maximal set of objects that are mutually
connected.

Implementation:
Find query: Check if two objects are in the same component.
Union command: Replace components containing two objects
with their union.

<ul>In order of increasing efficiency:</ul>
<li>Quick Find</li>
<li>Quick Union</li>
<li>Weighted Quick Union</li>
<li>Weighted Quick Union with Path Compression</li>
