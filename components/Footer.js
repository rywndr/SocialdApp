import React from 'react';
import Image from 'next/image';
import { IoIosMusicalNotes } from 'react-icons/io';
import style from '../styles/Footer.module.css';

const truncateEthAddress = address => {
  if (!address) {
    return '';
  }
  const match = address.match(
    /^0x[a-fA-F0-9]{4}([a-fA-F0-9]{36})[a-fA-F0-9]{4}$/
  );
  if (!match) {
    return address;
  }
  return `0x${match[1].substring(0, 4)}...${match[1].substring(32)}`;
};

const Footer = ({ address, caption }) => {
  return (
    <div className={style.footer}>
      <div className={style.footerText}>
        <h3>@{truncateEthAddress(address)}</h3>
        <p>{caption}</p>
        <div className={style.footerTicker}>
          <IoIosMusicalNotes className={style.footerIcon} />
          <p>Music Title</p>
        </div>
      </div>
      <div className={style.footerRecord}>
        <Image
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="Record"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Footer;
