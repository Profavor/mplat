export class User {
  loginId: string;
  password: string;
  confirmPassword: string;
  email: string;
  agree: boolean;

  constructor() {
    this.loginId = '',
      this.password = '',
      this.confirmPassword = '',
      this.email = '',
      this.agree = false
  }
}
