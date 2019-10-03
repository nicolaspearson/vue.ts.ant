import store from '@/store/store';

describe('store', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('has correct state', () => {
    expect(store.state).toMatchObject({});
  });
});
