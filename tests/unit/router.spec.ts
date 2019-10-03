import router from '@/router/router';
import Home from '@/views/Home.vue';

function getRouteByPath(path: string) {
  const { routes } = (router as any).options;
  const route = routes.find((r: any) => r.path === path);
  if (route === undefined) {
    throw new Error('Unexpected route in unit tests');
  }
  return route;
}

describe('router', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('sets history mode', () => {
    expect(router.mode).toBe('history');
  });

  test('home route uses Home view', () => {
    const route = getRouteByPath('/');
    expect(route.name).toBe('home');
    expect(route.component).toBe(Home);
    expect(route.path).toBe('/');
    expect(route.meta).toBe(undefined);
    expect(route.props).toBe(undefined);
  });

  test('about route uses About view', () => {
    const route = getRouteByPath('/about');
    expect(route.name).toBe('about');
    expect(route.component()).toBeDefined();
    expect(route.path).toBe('/about');
    expect(route.meta).toBe(undefined);
    expect(route.props).toBe(undefined);
  });
});
