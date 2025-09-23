import React, { useState, useEffect } from 'react';
import OriginalMDXComponents from '@theme-original/MDXComponents';
import Modal from 'react-modal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

Modal.setAppElement('#__docusaurus');

export default {
  ...OriginalMDXComponents,
  img: function ModalImage(props) {
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const imgs = Array.from(document.querySelectorAll('article img'));
      const slidesData = imgs.map((img) => ({
        src: img.src,
        title: img.alt || '',
      }));
      setSlides(slidesData);
    }, []);

    const handleClick = () => {
      const idx = slides.findIndex((s) => s.src === props.src);
      setIndex(idx >= 0 ? idx : 0);
      setOpen(true);
    };

    const handlePrev = () => {
      setIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const handleNext = () => {
      setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    return (
      <>
        <img
          {...props}
          onClick={handleClick}
          style={{
            cursor: 'zoom-in',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '0.6rem auto',
            objectFit: 'contain',
          }}
        />

        {slides.length > 0 && (
          <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              content: {
                position: 'relative',
                top: 'auto',
                left: 'auto',
                right: 'auto',
                bottom: 'auto',
                maxWidth: '80%',
                maxHeight: '80%',
                border: 'none',
                background: 'transparent',
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                cursor: 'pointer',
                fontSize: '1.2rem',
                zIndex: 1001,
              }}
            >
              ✕
            </button>

            {/* Previous Button */}
            {slides.length > 1 && (
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.4)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  cursor: 'pointer',
                  zIndex: 1001,
                }}
              >
                ‹
              </button>
            )}

            <Zoom overlayBgColorEnd="rgba(0,0,0,0.5)" zoomMargin={0}>
              <img
                src={slides[index].src}
                alt={slides[index].title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              />
            </Zoom>

            {/* Caption */}
            {slides[index].title && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  color: '#fff',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                }}
              >
                {slides[index].title}
              </div>
            )}

            {/* Next Button */}
            {slides.length > 1 && (
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.4)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  cursor: 'pointer',
                  zIndex: 1001,
                }}
              >
                ›
              </button>
            )}
          </Modal>
        )}
      </>
    );
  },
};
