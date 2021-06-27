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
];

export const javascriptCodes = [
  {
    _id: 1,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=100px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%253B%250Aconsole.log%28x%29%253B%250Aconsole.log%28typeof%2520x%29%253B%250A%250A%252F%252F%2520undefined%250A%252F%252F%2520undefined',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
  {
    _id: 2,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%25209%253B%250Aconsole.log%28x%29%253B%250Aconsole.log%28typeof%2520x%29%253B%250A%250A%252F%252F%25209%250A%252F%252F%2520number',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
  {
    _id: 3,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Aconsole.log%28x%29%253B%250A%250A%252F%252F%2520null',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
  {
    _id: 4,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Alet%2520y%253B%250A%252F%252F%25202%2520equal%2520sign%2520simple%2520comparison%250Aconsole.log%28x%2520%253D%253D%2520y%29%253B%250A%250A%252F%252F%2520null%250A%252F%252F%2520true',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
  {
    _id: 5,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520null%253B%250Alet%2520y%253B%250A%252F%252F%25203%2520equal%2520sign%2520strict%2520equality%250Aconsole.log%28x%2520%253D%253D%253D%2520y%29%253B%250A%250A%252F%252Ffalse',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
  {
    _id: 6,
    categoryId: 1,
    iFrame: {
      source:
        'https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=twilight&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=let%2520x%2520%253D%2520undefined%253B%250Aconsole.log%28x%29%253B%250A%250A%252F%252F%2520undefined',
      style: {
        width: '336px',
        height: '294px',
        border: '0',
        transform: 'scale(1)',
        overflow: 'hidden',
      },
    },
  },
];
