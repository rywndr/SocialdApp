import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { BiMessageMinus } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import Modal from 'react-modal';
import UploadModal from './UploadModal';
import { modalStyles } from '../utils/contract';
import style from '../styles/BottomBar.module.css';

Modal.setAppElement('#__next');

const BottomBar = () => {
  const router = useRouter();

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className={style.wrapper}>
      <AiFillHome className={style.bottomIcon} />
      <AiOutlineCompass className={style.bottomIcon} />
      <Link href="/?upload=1">
        <div
          className={style.addVideoButton}
          onClick={() => setIsUploadModalOpen(true)} // Open modal when clicked
        >
          <IoIosAdd
            className={style.bottomIcon}
            style={{ color: 'black' }}
          />
        </div>
      </Link>
      <BiMessageMinus className={style.bottomIcon} />
      <BsPerson className={style.bottomIcon} />
      <Modal
        isOpen={isUploadModalOpen}
        onRequestClose={() => setIsUploadModalOpen(false)} // Close modal
        style={modalStyles}
      >
        <UploadModal setNewVideoShow={setIsUploadModalOpen} />{' '}
        {/* Pass the function */}
      </Modal>
    </div>
  );
};

export default BottomBar;
