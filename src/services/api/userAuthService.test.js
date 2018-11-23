import { stub } from 'sinon';
import request from '../request';
import userAuthService from './userAuthService';

describe('userAuthService.js', () => {
  it('should call login service', () => {
    const fakeResponse = {
      data: {
        token: 'my-token'
      }
    };
    const postReq = stub(request, 'post').callsFake(f => {
      console.log(f);
      return fakeResponse;
    });

    const credentials = { email: 'email', password: 'password' };
    const response = userAuthService.logIn(credentials);

    expect(postReq.calledOnceWithExactly('/login', credentials)).toBeTruthy();
    expect(response).toEqual(fakeResponse);
  });
});
