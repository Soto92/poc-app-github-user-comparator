import React, { ReactElement } from 'react';
import { ReactComponent as LoadingIcon } from '../../assets/svg/loading.svg';
import './loader.css';

export interface LoaderProps {
  isVisible: boolean;
}

export const Loader = (props: LoaderProps): ReactElement => {
  const { isVisible } = props;

  return (
    <>
      {isVisible && (
        <div className='loader-container'>
          <div className='loader-overlay' />
          <div className='loader-content'>
            <LoadingIcon fill={'white'} width={90} height={90}/>
          </div>
        </div>
      )}
    </>
  );
};
