import {Inject} from 'utils/di';

export class LoginFormComponent {

  private static selector = 'ngc-login-form';
  private static options = {
    scope: {
      errorMessage: '=',
      fireSubmit: '&onSubmit'
    }
  };
  private static template = `
    <div class="flex flex-center login">

      <form class="mx-auto sm-col-6"
        name="loginFormCtrl.form"
        novalidate>

        <h1 class="mt0 mb3 center"><i class="h1 fa fa-bullseye fa-lg blue"></i> ngCourse App</h1>

        <div class="bold center p2 mb2 white bg-red rounded"
          ng-show="ctrl.errorMessage">
          {{ ctrl.errorMessage }}
        </div>

        <label>Enter username</label>
        <input class="block col-12 mb1 field"
          type="text"
          ng-model="ctrl.username"
          name="username"
          ng-pattern="/^[a-z]+$/"
          required>

        <label>Password</label>
        <input class="block col-12 mb1 field"
          type="password"
          ng-model="ctrl.password"
          name="password"
          required>

        <button class="btn btn-primary block col-12 mt2"
          id="login-button"
          type="submit"
          ng-click="ctrl.submit()"
          ng-disabled="loginFormCtrl.form.$invalid">
          Login
        </button>
      </form>
    </div>
    `;

  private errorMessage;
  private username;
  private password;
  private fireSubmit: Function;

  constructor() {
    //
  }

  private submit() {
    this.fireSubmit({
      data: this
    });
  }
}