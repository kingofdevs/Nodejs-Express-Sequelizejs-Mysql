import * as verifySignUp from '../auth/verifySignUp';
import * as authJwt from '../auth/verifyJwtToken';
import * as controller from '../controller/auth.controller';

export default function(app) {
 
 
  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
  
  app.post('/api/auth/signin', controller.signin);
  
  app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
  
  app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
  
  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
}