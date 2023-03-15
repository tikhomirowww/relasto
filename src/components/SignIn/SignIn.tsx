import React, { FC, useState } from 'react';
import { SiGoogle } from 'react-icons/si';

import EyeIcon from '../../assets/icons/eye-hide.svg';
import LockIcon from '../../assets/icons/lock.svg';
import UserIcon from '../../assets/icons/user.svg';
import Button from '../../ui/Button';
import CheckBox from '../../ui/CheckBox/CheckBox';
import Input from '../../ui/Input';
import styles from './SignIn.module.scss';
import { SignInProps } from './SignIn.type';

const SignIn: FC<SignInProps> = ({ handleSignUpClick }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Log In</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputs}>
            <Input
              onChange={handleEmailChange}
              placeholder="Email"
              type="text"
              value={email}
              prefixIcon={<UserIcon />}
              className={styles.input}
              width="420px"
            />
            <Input
              onChange={handlePasswordChange}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              prefixIcon={<LockIcon />}
              postfixIcon={<EyeIcon onClick={handleShowPassword} />}
              className={styles.input}
              width="420px"
            />
          </div>
          <div className={styles.checkbox}>
            <CheckBox
              isChecked={remember}
              onToggle={(isChecked) => setRemember(isChecked)}
              label="Remember"
            />
            <span>Forgot Password</span>
          </div>
          <div className={styles.buttons}>
            <Button type="submit">
              <span>Log in</span>
            </Button>
            <Button variant="outlined" className={styles.outlined}>
              <SiGoogle className={styles.google} />
              <span>Log in with Google</span>
            </Button>
          </div>
        </form>
        <div className={styles.line}></div>
        <div className={styles.login}>
          <p>
            Don't have an account? <span onClick={handleSignUpClick}>Create Account</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
