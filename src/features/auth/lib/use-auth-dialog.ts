import { useQuasar } from 'quasar';
import {
  LoginDialog,
  RegisterDialog,
} from '../ui';

export function useAuthDialog() {
  const $q = useQuasar();

  function openLogin() {
    $q.dialog({
      component: LoginDialog,
    });
  }

  function openRegister() {
    $q.dialog({
      component: RegisterDialog,
    });
  }

  return {
    openLogin,
    openRegister,
  };
}
