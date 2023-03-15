import React, { useState } from 'react';

import CalendarIcon from '../../assets/icons/calendar.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import UserIcon from '../../assets/icons/user.svg';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import styles from './RequestForVisit.module.scss';

const RequestForVisit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const inputsData = [
    {
      prefix: <UserIcon />,
      placeholder: 'Full Name',
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
      id: 1,
    },
    {
      prefix: <EmailIcon />,
      placeholder: 'Email Address',
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
      id: 2,
    },
    {
      prefix: <PhoneIcon />,
      placeholder: 'Phone Number',
      value: number,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value),
      id: 3,
    },
    {
      prefix: <CalendarIcon />,
      placeholder: 'Date',
      value: date,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
      id: 4,
    },
  ];
  return (
    <div className={styles.request_main}>
      <h2>Request for Visit</h2>
      <div className={styles.request_input_block}>
        {inputsData.map((item) => (
          <Input
            type="text"
            prefixIcon={item.prefix}
            key={item.id}
            placeholder={item.placeholder}
            className={styles.request_input}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name=""
        />
        <Button>Send Request</Button>
      </div>
    </div>
  );
};

export default RequestForVisit;
