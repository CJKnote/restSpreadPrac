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

describe('removeRandom test', function(){
    it('should be shorter after removal', function(){
        expect(removeRandom([1,3,4,5,6,4]).length).toEqual(5);
    });
});

describe('extend test', function(){
    it('should combine the arrays', function(){
        expect(extend([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
    });
    const animals = ["cat", "dog"];
    const fruit = ["apple", "banana", "peach"];
   
    it('should not change the existing arrays and make a new one to combine', function(){
        expect(extend(animals, fruit)).toEqual(["cat", "dog", "apple", "banana", "peach"]);
        expect(animals).toEqual(["cat", "dog"]);
        expect(fruit).toEqual(["apple", "banana", "peach"]);

    });
});

describe("addKeyVal test", function(){
    it('should add the new key/value pair', function(){
        expect(addKeyVal({cat: "icarus", ferret: "mocha"}, "snake", "udon")).toEqual({cat: "icarus", ferret: "mocha", snake: "udon"});
    });
});

describe("removeKey test", function(){
    it('should remove the key', function(){
        expect(removeKey({cat: "icarus", ferret: "mocha", snake: "udon"}, "cat")).toEqual({ferret: 'mocha', snake: 'udon'});
    });
});

describe("combine test", function(){
    it('should combine the objects', function(){
        const cat = {name: 'russibo', color: 'grey'};
        const quotes = {morning: 'feed me please', night: 'feed me please'};
        expect(combine(cat, quotes)).toEqual({name: 'russibo', color: 'grey', morning: 'feed me please', night: 'feed me please'});
    });
});

describe('update test', function(){
    it('should update the object', function(){
        const cat = {name: 'russibo', color: 'grey', favoriteToy: 'spring'};
        expect(update(cat, 'name', "Icarus")).toEqual({name: 'Icarus', color: 'grey', favoriteToy: 'spring'});
    });
});