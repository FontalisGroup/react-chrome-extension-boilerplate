import createReducer from './createReducer';

const TEST_ACTION_TYPE = 'TEST_ACTION_TYPE';

describe('createReducer.js', () => {
  it('should create valid reducer and change state', () => {
    const testFunction = (state, { payload }) => ({ ...state, isCalled: payload });
    const testState = {
      isCalled: false
    };

    const reducer = createReducer(
      {
        [TEST_ACTION_TYPE]: testFunction
      },
      {
        testState
      }
    );

    const nextState = reducer(testState, {
      type: TEST_ACTION_TYPE,
      payload: true
    });

    const expectedState = {
      ...testState,
      isCalled: true
    };

    expect(nextState).toEqual(expectedState);
  });
});
