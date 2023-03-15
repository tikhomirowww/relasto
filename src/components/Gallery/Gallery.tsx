import React, { FC, useEffect, useState } from 'react';

import ArrowLeftIcon from '../../assets/icons/ArrowLeft.svg';
import ArrowRightIcon from '../../assets/icons/ArrowRight.svg';
import GalleryIcon from '../../assets/icons/gallery-icon.svg';
import ZoomIcon from '../../assets/icons/zoom-button.svg';
import styles from './Gallery.module.scss';
import { GalleryProps } from './Gallery.types';

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

  const openModal = (urlProp: string) => {
    setShowModal(true);
    setUrl(urlProp);
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
