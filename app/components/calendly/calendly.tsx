'use client';

import { useState } from 'react';
import Button from '../button';
import styles from './calendly.module.css'

export default function Calendly() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button isLink={false} label='NAPLÁNUJTE SI SCHŮZKU' bgColor='o' onClick={() => setIsOpen(true)} inverse />

      {/* MODÁL */}
      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalWindow}>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
              aria-label="Zavřít"
            >
              &times;
            </button>
            <iframe
              src="https://calendly.com/hula-dominik/30min"
              className={styles.iframe}
              allow="fullscreen"
              title="Plánovač schůzky Calendly"
            />
          </div>
        </div>
      )}
    </>
  );
}
