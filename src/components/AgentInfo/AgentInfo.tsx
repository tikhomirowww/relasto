import React from 'react';
import styles from './AgentInfo.module.scss';
import MailIcon from '../../assets/Icons/email.svg';
import PhoneIcon from '../../assets/Icons/phone.svg';

const AgentInfo = () => {
  return (
    <div className={styles.agentInfo_main}>
      <h2>Agent Information</h2>
      <div className={styles.agentInfo_block}>
        <img src="https://i.ibb.co/X580W8z/Rectangle-5599.png" alt="Rectangle-5599" />
        <div className={styles.agentInfo_desc}>
          <h4>Bruno Fernandes</h4>
          <div className={styles.rating}></div>
          <div className={styles.agentInfo_contacts}>
            <div className={styles.agentInfo_contacts_mail}>
              <MailIcon />
              bruno@relasto.com
            </div>
            <div className={styles.agentInfo_contacts_number}>
              <PhoneIcon />
              +65 0231 965 965
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
