import React from 'react';
import { useHistory } from 'react-router';
import { STORAGE_KEYS } from '../../../constants/app-keys.const';

const userProtectedPage = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const Component = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
  ) => {
    const history = useHistory();

    const token = localStorage.getItem(STORAGE_KEYS.JWT_TOKEN_STUDENT);

    if (typeof window !== 'undefined') {
      if (!token) {
        history.push('/');
        return null;
      }
      // @ts-ignore
      return <WrappedComponent {...(props as T)} />;
    }

    return null;
  };

  Component.displayName = `${displayName}`;

  return Component;
};

export default userProtectedPage;
