const firstFollow = require('first-follow');

const rulesList = [
    {
        left: 'S',
        right: ['A','B','C']
    },
    {
        left: 'A',
        right: ['a']
    },{
        left: 'A',
        right: ['b']
    },{
        left: 'A',
        right: [null]
    },{
        left: 'B',
        right: ['c']
    },{
        left: 'B',
        right: ['d']
    },{
        left: 'B',
        right: [null]
    },{
        left: 'C',
        right: ['e']
    },{
        left: 'C',
        right: ['f']
    },{
        left: 'C',
        right: [null]
    }
];

const { firstSets, followSets, predictSets } = firstFollow(rulesList);

console.log(firstSets);
