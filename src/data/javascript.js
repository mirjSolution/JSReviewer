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
    name: 'Function Vs. Block Scope',
  },
  {
    _id: 3,
    topicId: 1,
    name: 'Automatic Semicolon Insertion',
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
];
