describe('findMin test', function(){
    it('should return the min', function(){
        expect(findMin(2,3,54,1)).toEqual(1);
        expect(findMin(1,1,47,8,0)).toEqual(0);
    });
    it('should work with negatives', function(){
        expect(findMin(2,-5,-2,1,0)).toEqual(-5);
    });
});

describe('mergeObjects test', function(){
    it('should combine the objects', function(){
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
    });
    it('should work with strings', function(){
        expect(mergeObjects({cat: "icarus"}, {snake: "udon", ferret: "mocha"})).toEqual({cat: "icarus", snake: "udon", ferret: "mocha"});
    })
});

describe('doubleAndReturnArgs test', function(){
    it('should return new array with original array values and all additional values doubled', function(){
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
        expect(doubleAndReturnArgs([1,1,1],1,2,0)).toEqual([1,1,1,2,4,0]);
    });
});
