"use client";

import { useState } from "react";

interface VideoProps {
  classes?: string;
}

const Video = ({ classes = "" }: VideoProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`srex-video position-relative ${classes}`}>
        <div className="container-fluid">
          <div className="srex-video__box ">
            <button onClick={() => setOpen(true)} className="srex-video__play__btn popup-video">
              <i className="fa-solid fa-play"></i>
            </button>
            <img src="/images/video-section.png" alt="Video" />
          </div>
        </div>
      </div>

      {/* Custom Video Modal Overlay */}
      {open && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setOpen(false)}
        >
          {/* Modal Container */}
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              backgroundColor: '#000'
            }}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
          >
            {/* Close Button */}
            <button 
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              &times; Close
            </button>

            {/* Responsive YouTube Embed */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/bYsgGkKksvs?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;