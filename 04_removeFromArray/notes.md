The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:


first test case:
```javascript
describe('removeFromArray', () => {
  test('removes a single value', () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
```



toSpliced() code example
```javascript
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
```
    - The first parameter (0) defines the position where new elements should be added (spliced in).

    - The second parameter (1) defines how many elements should be removed.

So now we're kinda getting the output we want. 
    - I am accessing the index of the number i want to remove with the first paramenter of toSpliced()
    - somehow need to make the argument plug into that function



# next test case

```javascript
test('removes multiple values', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
```

# story continued

so now i have turned the arguments into an array
    - this means therefore i can access the arguments directly using indicies


# new plan
now that i have the position of whatever first argument i have, now i can remove that specific position using an array method
