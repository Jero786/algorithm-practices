const {readChat} = require('./index');

const Node = ({text, left, right}) => ({
  text,
  left,
  right,
})

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

test('node tree two, no, and not right now', () => {
  // Arrange
  const userAnswers = ['No',  'Not right now'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  console.log(result);
  // Assert
  expect(result).toEqual(
    `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
    -No
        Some other limitations you may want to consider is that you will not be able to pick a seat.
        We're happy to let you know that we can upgrade you today for just $25!
        Would you like to do that now?
            -Not right now
                =Okay, please let our customer service team know if you change your mind.
`
  );
});

test('I did not, Yes, please upgrade', () => {
  // Arrange
  const userAnswers = ['No', 'Yes, please upgrade'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  
  // Assert
  expect(result).toEqual(
    `Hello, John! It looks like you booked a Basic Economy flight.
Are you aware that this flight doesn't have any storage for carry-on luggage?
    -No
        Some other limitations you may want to consider is that you will not be able to pick a seat.
        We're happy to let you know that we can upgrade you today for just $25!
        Would you like to do that now?
            -Yes, please upgrade
                =Okay, you've been upgraded!
`
  );
})