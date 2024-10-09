import styles from './page.module.scss';
import { MuiMoneyField } from '@nx-next-js-micro/components';
/* eslint-disable-next-line */
export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
      <MuiMoneyField label={'test'} />
    </div>
  );
}
