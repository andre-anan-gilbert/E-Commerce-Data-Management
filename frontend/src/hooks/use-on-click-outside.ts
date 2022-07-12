import { MutableRefObject, useEffect } from 'react';

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handleClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClose]);
};
