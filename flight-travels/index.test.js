const { getTwoFlightIndex, getTwoFlightIndexPerformance } = require('.');

test('Flow travels should return the longest flight possibles', () => {
  // Arrange
  const flights = [10, 20, 5, 1, 40];
  const maxAirplaneDistance = 16;

  // Act
  const flightsResults = getTwoFlightIndex(flights, maxAirplaneDistance);

  // Assert
  expect(flightsResults.length).toEqual(2);
  expect(flightsResults[0]).toEqual(0);
  expect(flightsResults[1]).toEqual(2);
});

test('Flow travels should return the longest flight possibles', () => {
  // Arrange
  const flights = [10, 20, 5, 1, 40];
  const maxAirplaneDistance = 16;

  // Act
  const flightsResults = getTwoFlightIndexPerformance(
    flights,
    maxAirplaneDistance
  );

  // Assert
  expect(flightsResults.length).toEqual(2);
  expect(flightsResults[0]).toEqual(0);
  expect(flightsResults[1]).toEqual(2);
});

test('Flight travels should not be less than 2 flight', () => {
  // Arrange
  const flights = [];
  const maxAirplaneDistance = 16;

  // Act
  function shouldThrowError() {
    getTwoFlightIndex(flights, maxAirplaneDistance);
  }

  // Assert
  expect(
    shouldThrowError.bind(null, flights, maxAirplaneDistance)
  ).toThrowError(/Given flags could not be less than two flights/i);
});

test('Flight travels should not be less distance than 1', () => {
  // Arrange
  const flights = [10, 20, 30, 40];
  const maxAirplaneDistance = 0;

  // Act
  function shouldThrowError() {
    getTwoFlightIndex(flights, maxAirplaneDistance);
  }

  // Assert
  expect(
    shouldThrowError.bind(null, flights, maxAirplaneDistance)
  ).toThrowError(/Given flags could not be less than two flights/i);
});
