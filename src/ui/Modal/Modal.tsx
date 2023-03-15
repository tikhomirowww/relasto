import classNames from 'classnames';
import React, { useEffect } from 'react';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.type';

const Modal: React.FC<ModalProps> = ({ size = 'md', children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.no_scroll);
    }
    return () => {
      document.body.classList.remove(styles.no_scroll);
    };
  }, [isOpen]);
  const combinedClassName = classNames(styles.modal_container, styles[size]);
  return (
    <div>
      {isOpen && (
        <div className={styles.modal_background} onClick={onClose}>
          <div className={combinedClassName} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal_close_button} onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
