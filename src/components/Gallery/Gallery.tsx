import React, { FC, useState, useEffect } from 'react';
import { GalleryProps } from './Gallery.types';
import styles from './Gallery.module.scss';
import ZoomIcon from '../../assets/Icons/zoom-button.svg';
import GalleryIcon from '../../assets/Icons/gallery-icon.svg';

import ArrowLeftIcon from '../../assets/Icons/ArrowLeft.svg';
import ArrowRightIcon from '../../assets/Icons/ArrowRight.svg';

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');

  const handleRightClick = () => {
    let ind = images.indexOf(url);
    if (ind === images.length - 1) {
      setUrl(images[0]);
    } else {
      setUrl(images[ind + 1]);
    }
  };

  const handleLeftClick = () => {
    let ind = images.indexOf(url);

    if (ind === 0) {
      ind = images.length;
      setUrl(images[ind]);
    } else {
      setUrl(images[ind - 1]);
    }

    setUrl(images[ind - 1]);
  };

  const openModal = (url: string) => {
    setShowModal(true);
    setUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setUrl('');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.no_scroll);
    }
    return () => {
      document.body.classList.remove(styles.no_scroll);
    };
  }, [isOpen]);

  return (
    <div className={styles.gallery_main}>
      {images.slice(0, 3).map((image, index) => (
        <div key={index} className={styles.gallery_item}>
          <img src={image} alt={`Image ${index}`} />
          <ZoomIcon onClick={() => openModal(image)} className={styles.zoom_icon} />
        </div>
      ))}
      <button className={styles.gallery_btn}>
        <GalleryIcon className={styles.gallery_icon} />
        {images.length - 3} More
      </button>
      {showModal && (
        <div className={styles.modal_bg}>
          <div onClick={() => closeModal()} className={styles.gallery_modal}>
            <img src={url} alt="modal image" />
            <div className={styles.modal_demo}>
              {images.map((item, index) => (
                <img
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setUrl(item);
                  }}
                  src={item}
                  alt=""
                />
              ))}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleLeftClick();
                }}
                className={styles.arrow_left}
              >
                <ArrowLeftIcon />
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleRightClick();
                }}
                className={styles.arrow_right}
              >
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
