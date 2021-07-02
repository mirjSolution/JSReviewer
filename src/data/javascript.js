export const javascriptTopic = [
  {
    _id: 1,
    name: 'Fundamentals',
  },
  {
    _id: 2,
    name: 'Arrays',
  },
  {
    _id: 3,
    name: 'Strings',
  },
  {
    _id: 4,
    name: 'Date and Time',
  },
  {
    _id: 5,
    name: 'Object Oriented',
  },
  {
    _id: 6,
    name: 'Modules',
  },
  {
    _id: 7,
    name: 'Document Object Model',
  },
  {
    _id: 8,
    name: 'Asynchronous',
  },
  {
    _id: 9,
    name: 'Map and Set',
  },
  {
    _id: 10,
    name: 'Coding Questions',
  },
];

export const javscriptCategory = [
  {
    _id: 1,
    topicId: 1,
    name: 'Null Vs. Undefined',
  },
  {
    _id: 2,
    topicId: 1,
    name: 'Function and Block Scope',
  },
  {
    _id: 3,
    topicId: 1,
    name: 'Automatic Semicolon Insertion',
  },
  {
    _id: 4,
    topicId: 1,
    name: 'Rest Parameter and Spread Operator',
  },
  {
    _id: 5,
    topicId: 1,
    name: 'Positive and Negative Infinity',
  },
  {
    _id: 6,
    topicId: 1,
    name: 'NaN (Not a number)',
  },
  {
    _id: 7,
    topicId: 1,
    name: 'Arrow Function',
  },
  {
    _id: 8,
    topicId: 1,
    name: 'Closure',
  },
];

export const javascriptQA = [
  {
    _id: 1,
    categoryId: 1,
    question: 'What is "undefined" in JavaScript ?',
    answer: `A variable which is not assigned a value is 'undefined'`,
  },
  {
    _id: 2,
    categoryId: 1,
    question:
      'What will be the output of (undefined == null) & (undefined === null) ? Why ?',
    answer: `2 equal sign means simple comparison is true because both of them have the same value it means 'nothing' and 3 equal sign or strict comparison equals false because null and undefined have the same value but the data types is different.`,
  },
  {
    _id: 3,
    categoryId: 1,
    question:
      'Can you explicitly assign "undefined" to a variable ? (let i = undefined)',
    answer: `Yes, you can explicitly assign 'undefined' to a variable`,
  },
  {
    _id: 4,
    categoryId: 2,
    question: 'What is the scope of a variable?',
    answer: `Scope is the lifetime or availabilty of a variable `,
  },
  {
    _id: 5,
    categoryId: 2,
    question: 'Function Scope Vs Block Scope',
    answer: `ES5 has a function scope & that is about hoisting, ES6 does not have 'hoisting' it has a block scope, if you declare variable with 'var' keyword hoisting will be there.`,
  },
  {
    _id: 6,
    categoryId: 2,
    question: 'What is hoisting in javascript',
    answer: `A process which happening behind the scene, internally it is bringing the declarations on top`,
  },
  {
    _id: 7,
    categoryId: 2,
    question: 'How does block scope work ?',
    answer: `It is nothing but the brackets {}, like if condition, for loop, do while loop etc. that creates seperate scope for declarations existing inside the block.`,
  },
  {
    _id: 8,
    categoryId: 3,
    question: 'What is ASI ?',
    answer: `In JavaScript, a semicolon is automatically inserted when two statements are separated by a line terminator`,
  },
  {
    _id: 9,
    categoryId: 3,
    question: 'Should you terminate all lines by a ";" ?',
    answer: `It is a good practice to put semicolon at the end but it is optional. If you do not put ";" then the line should not end in a proper way.`,
  },
  {
    _id: 10,
    categoryId: 3,
    question: `Why this code is returning undefined in spite of function returning a valid object literal ?`,
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=function%2520test%28%29%2520%257B%250A%2520%2520return%253B%250A%2520%2520%257B%250A%2520%2520%2520%2520a%253A%25205%253B%250A%2520%2520%257D%250A%257D%250Aconst%2520obj%2520%253D%2520test%28%29%253B%250Aconsole.log%28obj%29%253B',
    style: {
      width: '248px',
      height: '274px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: `Because the ASI automatic put a semicolon at the end of return and end the statement that's why it returned undefined, but if you put the brackets after the return the output will be the object { a:5 }`,
  },
  {
    _id: 11,
    categoryId: 3,
    question:
      'Can "use strict" statement or the strict mode change the behavior of ASI ?',
    answer: ` No it doesn't change he behavior, if you write 'use strict' it does not mean you have to end all lines with ';'.`,
  },
  {
    _id: 12,
    categoryId: 4,
    question: 'What is spread operator ?',
    answer: `It is a part of ES6, that spreads the array into separate data values.`,
  },
  {
    _id: 13,
    categoryId: 4,
    question: 'What is rest parameter ?',
    answer: `The rest parameter is part of ES6 to deal with any number of parameters, In ES5 we have array like object called 'arguments' which does not work in arrow function..`,
  },
  {
    _id: 14,
    categoryId: 4,
    question: 'Can we use arguments object in arrow function?',
    answer: `No it will not work. If it is a normal or traditional function it will work.`,
  },
  {
    _id: 15,
    categoryId: 4,
    question: 'Which is the best way to create new arrays with assignment?',
    answer: `The better way of assigning array is using the spread operator.`,
  },
  {
    _id: 16,
    categoryId: 4,
    question: `How can you handle the 'n' number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.`,
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=let%2520arr%2520%253D%2520%255B1%252C%25205%252C%252089%252C%25205%252C%2520900%252C%2520234%252C%25201456%255D%253B%250A%250Afunction%2520getMaxValue%28arr%29%2520%257B%250A%2520%2520return%2520Math.max%28...arr%29%253B%250A%257D%250A%250Aconst%2520maxValue%2520%253D%2520getMaxValue%28arr%29%253B%250Aconsole.log%28maxValue%29%253B%250A%250A%252F%252F%25201456%250A%250Afunction%2520getSum%28...num%29%2520%257B%250A%2520%2520return%2520num.reduce%28%250A%2520%2520%2520%2520%28accumulator%252C%2520currentValue%29%2520%253D%253E%2520%28accumulator%2520%252B%253D%2520currentValue%29%252C%250A%2520%2520%2520%25200%250A%2520%2520%29%253B%250A%257D%250A%250Aconst%2520sum%2520%253D%2520getSum%281%252C%25205%252C%252089%252C%25205%252C%2520900%252C%2520234%252C%25201456%29%253B%250Aconsole.log%28sum%29%253B%250A%250A%252F%252F%25202690%250A',
    style: {
      width: '636px',
      height: '544px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: ``,
  },
  {
    _id: 17,
    categoryId: 4,
    question:
      'Can the rest operator be placed anywhere in the function parameter list? Or Is this piece of code valid?',
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=function%2520test%28...a%252Cb%29%257B%250A%2520%2520%2520%252F%252Fstatements%250A%257D%250A%250A%252F%252F%2520SyntaxError%253A%2520Rest%2520parameter%2520must%2520be%2520last%2520formal%2520parameter%250A',
    style: {
      width: '426px',
      height: '238px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: `No it cannot be placed anywhere it should be always placed at the end of the parameter list. The code is invalid and will return a SyntaxError`,
  },
  {
    _id: 18,
    categoryId: 5,
    question: 'What is Infinity?',
    answer: `Infinity is a special integer value which is greater than any value or in other words it is the highest possible value available in javascript
    2 possibilities for infinity (1. Positive Infinity (POSITIVE_INFINITY) 2. Negative Infinity(NEGATIVE_INFINITY))
    In javascript numbers are stored in 64-bit format. It means any value which cannot fit in the 64-bit format. Will return infinity, it cannot hold a value larger than 64 bit.`,
  },
  {
    _id: 19,
    categoryId: 5,
    question:
      'How will you put a validation for positive or negative Infinity?',
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=if%28num%2520%253D%253D%253D%2520Number.NEGATIVE_INFINITY%29%2520%257B%250A%2520%2520%2520%2520return%2520%27Negative%2520infinite%2520value%27%250A%257D%2520else%2520%257B%250A%2520%2520%2520%2520return%2520num%253B%2520%252F%252F%2520or%2520some%2520calculation%250A%257D%250A%250Aif%28num%2520%253D%253D%253D%2520Number.POSTIVE_INFINITY%29%2520%257B%250A%2520%2520%2520%2520return%2520%27Infinite%2520value%27%250A%257D%2520else%2520%257B%250A%2520%2520%2520%2520return%2520num%253B%2520%252F%252F%2520or%2520some%2520calculation%250A%257D',
    style: {
      width: '408px',
      height: '350px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: ``,
  },
  {
    _id: 20,
    categoryId: 5,
    question: 'What will be the output of this code? console.log(1/0)',
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=console.log%281%252F0%29%253B%250A%250A%252F%252Finfinity',
    style: {
      width: '232px',
      height: '184px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: ``,
  },
  {
    _id: 21,
    categoryId: 6,
    question: 'What is NaN?',
    answer: `Is a global property representing 'Not a number'. You normally get this error when there is a non numeric value or operation performed.`,
  },
  {
    _id: 22,
    categoryId: 6,
    question: 'What will be the output of the below statement?',
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=console.log%28NaN%2520%253D%253D%2520NaN%29%253B%250Aconsole.log%28NaN%2520%253D%253D%253D%2520NaN%29%253B%250A%250A%252F%252F%2520false%250A%252F%252F%2520false',
    style: {
      width: '299px',
      height: '220px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: `It will return false all the time even with strict equality or non-strict equality. Because NaN always have unique values for each NaN so it will not match.`,
  },
  {
    _id: 23,
    categoryId: 6,
    question: 'What is the difference between isNaN() and isFinite() method?',
    answer: `isNaN() is a global function which returns true or false depending on the function while
    isFinite() is a global function checks for NaN, Infinity and -Infinity as well. It checks whether the value is regular number or not.`,
  },
  {
    _id: 24,
    categoryId: 7,
    question: 'What are the behaviour of arrow function?',
    answer: `The 'this' object does not work with arrow function, 'arguments' object does not work with arrow function, and you cannot use 'new' to call arrow function`,
  },
  {
    _id: 25,
    categoryId: 7,
    question: 'Explain the syntactical features of arrow function.',
    answer: `It is less verbose easy to use if you only have a return statement you can just do it only on one line of code and you can remove the parentheses if you only have one paremeter.`,
  },
  {
    _id: 26,
    categoryId: 7,
    question: `Why 'this' does not work in arrow function?`,
    answer: `because in ES6 we have class keyword to deal with the classes so we do not need a function to act as a class.`,
  },
  {
    _id: 27,
    categoryId: 7,
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=const%2520obj%253D%257B%250A%2520%2520method%253A%28%29%253D%253E%2520%250A%2520%2520%257B%250A%2520%2520%2520%2520console.log%28this%29%253B%250A%2520%2520%257D%250A%257D',
    style: {
      width: '274px',
      height: '238px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    question: `Explain output of following code with reason`,
    answer: `Normally if you use the traditional function it will refer to current context obj but if you use the arrow function the console.log 'this' will refer to window object.`,
  },
  {
    _id: 28,
    categoryId: 7,
    question: `How can you handle arguments object like functionality in arrow function?`,
    answer: `You can use the rest parameter to deal all the parameters pass to the function`,
  },
  {
    _id: 29,
    categoryId: 7,
    question: `Can you write IIFE with arrow function syntax?`,
    answer: `Yes`,
  },
  {
    _id: 30,
    categoryId: 8,
    question: `What is Closure?`,
    answer: `When a function comes under another function a 'closure' is created, it remember outer variable and also helps to access outer scope members.
    `,
  },
  {
    _id: 31,
    categoryId: 8,
    question: `How can you access private variable or function outside the scope ?`,
    iFrame:
      'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=function%2520outer%28%29%2520%257B%250A%2520%2520return%2520function%2520%28%29%2520%257B%250A%2520%2520%2520%2520console.log%28%27inner%2520called%27%29%253B%250A%2520%2520%257D%253B%250A%257D%250A%250Aconst%2520callInnerScope%2520%253D%2520outer%28%29%253B%250A%250AcallInnerScope%28%29%253B%250A%250A%252F%252Finner%2520Called',
    style: {
      width: '358px',
      height: '328px',
      border: '0',
      transform: 'scale(1)',
      overflow: 'none',
    },
    answer: ``,
  },
  {
    _id: 32,
    categoryId: 8,
    question: `Explain the advantage of closure ?`,
    answer: `The main advantage of 'closure' is that any member which is private or certain scope, can be accessed keeping it private so that the variable is away from any accidental change of value. Accessing private members with closure pattern assure better approach of making a variable global`,
  },
];

export const javascriptCodes = [
  {
    _id: 1,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%253B%250Aconsole.log%28x%29%253B%250Aconsole.log%28typeof%2520x%29%253B%250A%250A%252F%252F%2520undefined%250A%252F%252F%2520undefined%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 2,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%25209%253B%250Aconsole.log%28x%29%253B%250Aconsole.log%28typeof%2520x%29%253B%250A%250A%252F%252F%25209%250A%252F%252F%2520number%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 3,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Aconsole.log%28x%29%253B%2520%2520%2520%2520%2520%2520%2520%250A%250A%252F%252F%2520null%250A%250A%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },

  {
    _id: 4,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520undefined%253B%250Aconsole.log%28x%29%253B%2520%2520%2520%2520%2520%2520%2520%250A%250A%250A%252F%252F%2520undefined%250A%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 5,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Alet%2520y%253B%250Aconsole.log%28x%2520%253D%253D%253D%2520y%29%253B%2520%250A%250A%252F%252F%2520false%250A%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 6,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Alet%2520y%253B%250A%250Aconsole.log%28x%2520%253D%253D%2520y%29%253B%2520%2520%250A%252F%252F%2520true%250A%250A',
      style: {
        width: '274px',
        height: '256px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },

  {
    _id: 7,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Scope%250Alet%2520x%2520%253D%252010%253B%250Afunction%2520a%28%29%2520%257B%250A%2520%2520x%2520%253D%2520x%2520%252B%25205%253B%250A%257D%250Afunction%2520b%28%29%2520%257B%250A%2520%2520console.log%28x%29%253B%2520%2520%2520%2520%2520%250A%257D%250Aa%28%29%253B%250Ab%28%29%253B%250A%252F%252F%252015%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 8,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Scope%250Afunction%2520a%28%29%2520%257B%250A%2520%2520var%2520x%2520%253D%252010%253B%250A%257D%250Afunction%2520b%28%29%2520%257B%250A%2520%2520console.log%28x%29%253B%250A%257D%250Aa%28%29%253B%250Ab%28%29%253B%250A%252F%252F%2520Ref%2520err%2520x%2520is%2520not%2520defined%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 9,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Scope%250Alet%2520x%2520%253D%25209%253B%250A%257B%250A%2520%2520let%2520x%2520%253D%25208%253B%250A%2520%2520console.log%28x%29%253B%2520%2520%2520%2520%2520%250A%257D%250Aconsole.log%28x%29%253B%250A%250A%252F%252F%25208%250A%252F%252F%25209%250A%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 10,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Hoisted%250Aconsole.log%28x%29%253B%2520%2520%2520%2520%2520%2520%2520%250Avar%2520x%253B%250A%250A%252F%252F%2520undefined%250A%250A%250A%250A%250A%250A%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },

  {
    _id: 11,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Hoisted%250Aconsole.log%28x%29%253B%2520%2520%2520%2520%2520%2520%2520%250Avar%2520x%2520%253D%25209%253B%250A%250A%252F%252F%2520undefined%2520%250A%250A%250A%250A%250A%250A%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 12,
    categoryId: 2,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Not%2520Hoisted%250Aconsole.log%28x%29%253B%250Alet%2520x%253B%250A%250A%252F%252F%2520Ref%2520err%2520cannot%2520access%2520x%2520before%2520initialization%250A%250A%250A%250A%250A',
      style: {
        width: '274px',
        height: '310px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
  {
    _id: 13,
    categoryId: 7,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=28px&ph=25px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=%252F%252F%2520Traditional%250Afunction%2520test%28%29%2520%257B%257D%250Atest%28%29%253B%250A%250A%252F%252F%2520Function%2520expression%250Aconst%2520test1%2520%253D%2520function%2520%28%29%2520%257B%257D%253B%250A%250A%252F%252F%2520Arrow%2520function%250Aconst%2520test2%2520%253D%2520%28%29%2520%253D%253E%2520%257B%257D%253B%250Aconst%2520sum%2520%253D%2520%28a%29%2520%253D%253E%2520%257B%250A%2520%2520return%2520a%2520%252B%2520b%253B%250A%257D%253B%250Aconst%2520sum1%2520%253D%2520%28a%252C%2520b%29%2520%253D%253E%2520a%2520%252B%2520b%253B%250A%250A%252F%252F%2520IIFE%2520immediately%2520invoke%2520function%2520expression%250A%28function%2520%28%29%2520%257B%250A%2520%2520console.log%28%27IIFE%27%29%253B%250A%257D%29%28%29%253B%250A%250A%252F%252F%2520IIFE%2520immediately%2520invoke%2520arrow%2520expression%250A%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520console.log%28%27IIAF%27%29%253B%250A%257D%29%28%29%253B%250A',
      style: {
        width: '476px',
        height: '562px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'none',
      },
    },
  },
];
