import React, { FC, useState } from 'react';

import Modal from '../../ui/Modal';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { AuthorizeProps } from './Authorize.type';

const Authorize: FC<AuthorizeProps> = ({ onClose, isOpen }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleAuthorizeClose = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    onClose();
  };

  return (
    <>
      {isSignInOpen && (
        <Modal isOpen={isOpen} onClose={handleAuthorizeClose}>
          <SignIn onClose={handleAuthorizeClose} handleSignUpClick={handleSignUpClick} />
        </Modal>
      )}

      {isSignUpOpen && (
        <Modal isOpen={isOpen} onClose={handleAuthorizeClose} size="lg">
          <SignUp onClose={handleAuthorizeClose} handleSignInClick={handleSignInClick} />
        </Modal>
      )}
    </>
  );
};

export default Authorize;
