import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosMusicalNotes } from 'react-icons/io';
import style from '../styles/Footer.module.css';
import { useAccount } from 'wagmi';

const Footer = ({ caption }) => {
  const [userAccount, setUserAccount] = useState('');
  const [truncatedAccount, setTruncatedAccount] = useState('');

  const { address } = useAccount();

  useEffect(() => {
    setUserAccount(address);
    setTruncatedAccount(`${address.slice(0, 4)}...${address.slice(-4)}`);
  }, [address]);

  return (
    <div className={style.footer}>
      <div className={style.footerText}>
        <h3>@{truncatedAccount}</h3>
        <p>{caption}</p>
        <div className={style.footerTicker}>
          <IoIosMusicalNotes className={style.footerIcon} />
          <p>Music Title</p>
        </div>
      </div>
      <div className={style.footerRecord}>
        <Image
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="vinyl record"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Footer;
