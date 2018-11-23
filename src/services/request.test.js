import request from './request';
import chrome from 'sinon-chrome';
import { LOCAL_STORAGE_TOKEN } from '../constants/constants';

describe('request.js', () => {
  it('should call addResponseInterceptors', () => {
    function customOnFulfilled() {}
    function customOnRejected() {}
    request.addResponseInterceptors(customOnFulfilled, customOnRejected);

    const { fulfilled, rejected } = request.interceptors.response.handlers[0];
    expect(fulfilled.name).toEqual(customOnFulfilled.name);
    expect(rejected.name).toEqual(customOnRejected.name);
  });

  it('should call getToken', async () => {
    chrome.storage.sync.get.yields({ [LOCAL_STORAGE_TOKEN]: '123456' });
    const token = await request.getToken();
    expect(token).toBe('123456');
  });

  it('should call attachTokenHeader', () => {
    const token = '123456';

    request.attachTokenHeader(token);
    expect(request.defaults.headers.Authorization).toBe(`Bearer ${token}`);
  });

  it('should call addAuthToken with no token in header', async () => {
    const token = '123456';
    chrome.storage.sync.get.yields({ [LOCAL_STORAGE_TOKEN]: token });
    const resp = await request.addAuthToken();

    expect(resp.defaults.headers.Authorization).toBe(`Bearer ${token}`);
  });

  it('should call addAuthToken with token in header', async () => {
    const token = '123456';
    request.defaults.headers.Authorization = `Bearer ${token}`;

    const resp = await request.addAuthToken();
    expect(resp.defaults.headers.Authorization).toBe(`Bearer ${token}`);
  });

  it('should call setAuthToken', () => {
    const token = '123456';
    request.setAuthToken(token);

    const expectedArgs = {
      [LOCAL_STORAGE_TOKEN]: '123456'
    };

    expect(chrome.storage.sync.set.calledOnceWith(expectedArgs)).toBeTruthy();
    expect(request.defaults.headers.Authorization).toBe(`Bearer ${token}`);
  });

  it('should call removeToken', () => {
    const token = '123456';
    request.defaults.headers.Authorization = `Bearer ${token}`;
    chrome.storage.sync.set({ [LOCAL_STORAGE_TOKEN]: token });

    request.removeToken();

    expect(chrome.storage.sync.remove.calledOnceWith(LOCAL_STORAGE_TOKEN)).toBeTruthy();
    expect(request.defaults.headers.Authorization).toBeUndefined();
  });
});
