const {buildConversationalTree, readChat} = require('.');


const conversationTree = {
  messages: [
    {text: 'Hello, John! It looks like you booked a Basic Economy flight.'},
    {text: 'Are you aware that this flight doesn\'t have any storage for carry-on luggage?'}
  ],
  left: {
    messages: [
      {text: "Some other limitations you may want to consider is that you will not be able to pick a seat."},
      {text: "We're happy to let you know that we can upgrade you today for just $25!", label: 1},
      {text: "Would you like to do that now?"}
    ],
    left: {
      messages: [{text: 'Okay, please let our customer service team know if you change your mind.'}]
    },
    right: {
      messages: [
        {text: "Okay, you've been upgraded!"}
      ]
    }
  },
  right: {
    goto: 1
  }
};


test('should build conversational tree', () => {
  // Arrange
  const text = `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
-No
Some other limitations you may want to consider is that you will not be able to pick a seat.
1:We're happy to let you know that we can upgrade you today for just $25!
Would you like to do that now?
-Not right now
=Okay, please let our customer service team know if you change your mind.
-Yes, please upgrade
=Okay, you've been upgraded!
-Yes
>1`;
  // Act
  const tree = buildConversationalTree(text);
  // Assert
  
  expect(tree).toEqual({
      "messages": [{"text": "Hello, John! It looks like you booked a Basic Economy flight."}, {"text": "Are you aware that this flight doesn't have any storage for carry-on luggage?"}],
      "left": {
        "messages": [{"text": "Some other limitations you may want to consider is that you will not be able to pick a seat."}, {
          "text": "1:We're happy to let you know that we can upgrade you today for just $25!",
          "label": "1"
        }, {"text": "Would you like to do that now?"}],
        "left": {
          "messages": [{"text": "=Okay, please let our customer service team know if you change your mind."}],
          "right": {"messages": [{"text": "=Okay, you've been upgraded!"}], "right": {"messages": [], "goto": ""}}
        }
      }
    }
  );
});


test('node tree two, no, and not right now', () => {
  // Arrange
  const userAnswers = ['No',  'Not right now'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);

  // Assert
  expect(result).toEqual(
    `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
    -No
        Some other limitations you may want to consider is that you will not be able to pick a seat.
        1:We're happy to let you know that we can upgrade you today for just $25!
        Would you like to do that now?
            -Not right now
                =Okay, please let our customer service team know if you change your mind.
`
  );
});
/*
test('I did not, Yes, please upgrade', () => {
  // Arrange
  const userAnswers = ['No', 'Yes, please upgrade'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  
  // Assert
  console.log(result);
 expect(result).toEqual(
    `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
    -No
        Some other limitations you may want to consider is that you will not be able to pick a seat.
        1:We're happy to let you know that we can upgrade you today for just $25!
        Would you like to do that now?
            -Yes, please upgrade
                =Okay, you've been upgraded!
`
  );
})

test('I did not, Yes', () => {
  // Arrange
  const userAnswers = ['No', 'Yes >1'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  
  // Assert
  console.log(result);
 expect(result).toEqual(
    `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
    -No
        Some other limitations you may want to consider is that you will not be able to pick a seat.
        1:We're happy to let you know that we can upgrade you today for just $25!
        Would you like to do that now?
            -Yes, please upgrade
                =Okay, you've been upgraded!
`
  );
})
 */