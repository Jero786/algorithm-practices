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
    answer: '-No',
    messages: [
      {text: "Some other limitations you may want to consider is that you will not be able to pick a seat."},
      {text: "We're happy to let you know that we can upgrade you today for just $25!", label: 1},
      {text: "Would you like to do that now?"}
    ],
    left: {
      answer: '-No',
      messages: [{text: 'Okay, please let our customer service team know if you change your mind.'}]
    },
    right: {
      answer: '-Yes, please upgrade',
      messages: [
        {text: "Okay, you've been upgraded!"}
      ]
    }
  },
  right: {
    answer: '-Yes',
    goto: 1
  }
};

test('I did not and Not right now', () => {
  // Arrange
  const userAnswers = ['No', 'Not right now'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  
  // Assert
  expect(result).toEqual(
    `Output(text="Hello, John! It looks like you booked a Basic Economy flight.")
Output(text="Are you aware that this flight doesn't have any storage for carry-on luggage?")
    - Answer(text="No")
        Output(text="Some other limitations you may want to consider is that you will not be able to pick a seat.")
        Output(text="We're happy to let you know that we can upgrade you today for just $25!")
        Output(text="Would you like to do that now?")
            - Answer(text="Not right now")
                Conclusion=(text="Okay, please let our customer service team know if you change your mind.")
`
  );
});


test('I did not, Not right now and yes please upgrade', () => {
  // Arrange
  const userAnswers = ['Yes', 'Yes, please upgrade'];
  
  // Act
  const result = readChat(conversationTree, userAnswers);
  
  // Assert
  expect(result).toEqual(
    `Output(text="Hello, John! It looks like you booked a Basic Economy flight.")
Output(text="Are you aware that this flight doesn't have any storage for carry-on luggage?")
    - Answer(text="Yes")
        Output(text=">1")
        Output(text="We're happy to let you know that we can upgrade you today for just $25!")
        Output(text="Would you like to do that now?")
            - Answer(text="Yes, please upgrade")
                Conclusion=(text="Okay, you've been upgraded!")
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
    `Output(text="Hello, John! It looks like you booked a Basic Economy flight.")
Output(text="Are you aware that this flight doesn't have any storage for carry-on luggage?")
    - Answer(text="No")
        Output(text="Some other limitations you may want to consider is that you will not be able to pick a seat.")
        Output(text="We're happy to let you know that we can upgrade you today for just $25!")
        Output(text="Would you like to do that now?")
            - Answer(text="Yes, please upgrade")
                Conclusion=(text="Okay, you've been upgraded!")
`
  );
})