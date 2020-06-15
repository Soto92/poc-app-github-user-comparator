import React from 'react';
import Avatar from '../../assets/images/User-bw.png';
import './search.css';
import {ResultGitHub} from './types';

export interface SearchProps {
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  data?: ResultGitHub;
  disabled?: boolean;
}

const Search: React.FC<SearchProps> = (props) => {
  const { onChange, onBlur, data, disabled } = props;

  return (
    <React.Fragment>
      {data ? (
        <div className='container'>
          <div className='portrait-border'>
            <img src={data.avatar_url} alt='default avatar img' className='image' />
          </div>
          <p className='basic-text'>Nome: {data.name}</p>
          <p className='basic-text'>Nick: {data.login}</p>
        </div>
      ) : (
        <div className='container'>
          <div className='portrait-border'>
            <img src={Avatar} alt='default avatar img' className='image' />
          </div>
          <input
            onChange={(event) => onChange && onChange(event.target.value)}
            onBlur={(event) => onBlur && onBlur(event.target.value)}
            placeholder='username'
            disabled={disabled ? disabled : false}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
