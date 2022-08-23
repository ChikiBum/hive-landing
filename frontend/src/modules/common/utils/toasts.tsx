import toast from 'react-hot-toast';

export const toastSuccess = (text: string) => {
  toast.success(text, {
    position: 'top-right',
  });
};

export const toastError = (text: string) => {
  toast.error(text, {
    position: 'top-right',
    duration: 6000,
  });
};
