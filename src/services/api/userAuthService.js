import request from '../request';

class UserAuthService {
  logIn = credentials => request.post('/login', credentials);
}

export default new UserAuthService();
