import React, { useState } from 'react';
import style from '../styles/UploadModal.module.css';
import { useAppContext } from '../context/context';
import toast from 'react-hot-toast';

const UploadModal = ({ setNewVideoShow }) => {
  const [caption, setCaption] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const { createVideo } = useAppContext();
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!caption || !videoUrl) return;

    toast
      .promise(createVideo(caption, videoUrl), {
        loading: 'Creating New Post... ⏳',
        success: 'Post Created Successfully! 🎉',
        error: 'Something went wrong! 😢',
      })
      .then(() => {
        setShowModal(false);
        setNewVideoShow(false); // Close the modal using the prop
      });
  };

  return (
    <div className={style.wrapper}>
      {showModal && (
        <div className={style.modal}>
          {' '}
          {/* Render modal only if showModal is true */}
          <div className={style.title}>New Post</div>
          <div className={style.inputField}>
            <div className={style.inputTitle}>Write a caption...</div>
            <div className={style.inputContainer}>
              <input
                className={style.input}
                type="text"
                value={caption}
                onChange={event => setCaption(event.target.value)}
              />
            </div>
          </div>
          <div className={style.inputField}>
            <div className={style.inputTitle}>Video URL</div>
            <div className={style.inputContainer}>
              <input
                className={style.input}
                type="text"
                value={videoUrl}
                onChange={event => setVideoUrl(event.target.value)}
              />
            </div>
          </div>
          <div className={style.modalButtons}>
            <button
              onClick={() => {
                setShowModal(false);
                setNewVideoShow(false); // Call the function to close the modal
              }}
              className={`${style.button} ${style.cancelButton}`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`${style.button} ${style.createButton}`}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;
