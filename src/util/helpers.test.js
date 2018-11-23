import { filterValidPages, getVisiblePages, populateFieldsOnError } from './helpers';

describe('helpers.js', () => {
  it('should populateFieldsOnError', () => {
    const fields = [
      {
        name: 'username',
        value: 'user',
        error: 'User not found',
        validate: []
      },
      {
        name: 'password',
        value: '123',
        error: '',
        validate: []
      }
    ];

    const res = populateFieldsOnError(fields);

    const expected = {
      username: {
        value: 'user',
        error: 'User not found',
        validate: []
      },
      password: {
        value: '123',
        error: '',
        validate: []
      }
    };

    expect(res).toEqual(expected);
  });

  it('should filterValidPages', () => {
    const validPages = filterValidPages([1, 2, 3, 4, 5, 6, 7, 8], 5);

    const expected = [1, 2, 3, 4, 5];

    expect(validPages).toEqual(expected);
  });

  it('should getVisiblePages when less than 3 total', () => {
    const visiblePages = getVisiblePages(0, 2);

    expect(visiblePages).toEqual([1, 2]);
  });

  it('should getVisiblePages when undefined page', () => {
    const visiblePages = getVisiblePages(null, 5);

    expect(visiblePages).toEqual([1, 2, 3]);
  });

  it('should getVisiblePages when last page selected', () => {
    const visiblePages = getVisiblePages(5, 5);

    expect(visiblePages).toEqual([3, 4, 5]);
  });

  it('should getVisiblePages when another page selected', () => {
    const visiblePages = getVisiblePages(4, 15);

    expect(visiblePages).toEqual([3, 4, 5]);
  });
});
