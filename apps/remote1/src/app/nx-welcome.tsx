import React from 'react';
import styles from './app.module.css';

export function Login({ title = 'Log in to Bayer' }: { title?: string }) {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form-wrapper']}>
        <h2 className={styles['login-title']}>{title}</h2>
        <p className={styles['login-description']}>
          Ensure you have your email and password handy to login to your Bayer Account.
        </p>
        <button className={styles['login-button']}>LOG IN</button>
        <div className={styles['signup-link']}>
          <p>
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
