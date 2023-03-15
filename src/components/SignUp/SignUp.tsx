import React, { FC, useState } from 'react';
import { SiGoogle } from 'react-icons/si';

import Emailicon from '../../assets/icons/email.svg';
import EyeIcon from '../../assets/icons/eye-hide.svg';
import LockIcon from '../../assets/icons/lock.svg';
import MapIcon from '../../assets/icons/map.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import UserIcon from '../../assets/icons/user.svg';
import Button from '../../ui/Button';
import CheckBox from '../../ui/CheckBox/CheckBox';
import Input from '../../ui/Input';
import styles from './Signup.module.scss';
import { SignUpProps } from './SignUp.type';

const SignUp: FC<SignUpProps> = ({ handleSignInClick }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleRePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleReShowPassword = () => {
    setReShowPassword(!showRePassword);
  };
  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Create Account</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.left}>
              <Input
                onChange={handleFullNameChange}
                placeholder="Full Name"
                type="text"
                value={fullName}
                prefixIcon={<UserIcon />}
                className={styles.input}
                width="300px"
              />
              <Input
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
                type="number"
                value={phoneNumber}
                prefixIcon={<PhoneIcon />}
                className={styles.input}
                width="300px"
              />
              <Input
                onChange={handlePasswordChange}
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                prefixIcon={<LockIcon />}
                postfixIcon={<EyeIcon onClick={handleShowPassword} />}
                className={styles.input}
                width="300px"
              />
            </div>
            <div className={styles.right}>
              <Input
                onChange={handleEmailChange}
                placeholder="Email"
                type="text"
                value={email}
                prefixIcon={<Emailicon />}
                className={styles.input}
                width="300px"
              />
              <Input
                onChange={handleAddressChange}
                placeholder="Adress"
                type="text"
                value={address}
                prefixIcon={<MapIcon />}
                className={styles.input}
                width="300px"
              />
              <Input
                onChange={handleRePasswordChange}
                placeholder="Re-Password"
                type={showRePassword ? 'text' : 'password'}
                value={rePassword}
                prefixIcon={<LockIcon />}
                postfixIcon={<EyeIcon onClick={handleReShowPassword} />}
                className={styles.input}
                width="300px"
              />
            </div>
          </div>
          <div className={styles.checkbox}>
            <CheckBox
              isChecked={remember}
              onToggle={(isChecked) => setRemember(isChecked)}
              label="I agree to all"
            />
            <a href="">Terms and Conditions</a>
          </div>
          <div className={styles.buttons}>
            <Button type="submit">
              <span>Create Account</span>
            </Button>
            <Button variant="outlined" className={styles.outlined}>
              <SiGoogle className={styles.google} />
              <span>Create Account with Google</span>
            </Button>
          </div>
        </form>
        <div className={styles.line}></div>
        <div className={styles.login}>
          <p>
            Have an account? <span onClick={handleSignInClick}>Log in</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
