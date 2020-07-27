import React, { ReactElement } from 'react';
import { ResultGitHub } from '../search/types';
import './table.css';

export interface TableProps {
  data: ResultGitHub[];
}

const Table: React.FC<TableProps> = (props): ReactElement => {
  const { data } = props;

  const getNames = () => {
    return data.map((item) => {
      return <td>{item.login}</td>;
    });
  };
  const getFollowers = () => {
    return data.map((item) => {
      return <td>{item.followers}</td>;
    });
  };
  const getFollowing = () => {
    return data.map((item) => {
      return <td>{item.following}</td>;
    });
  };
  const getPublicRepository = () => {
    return data.map((item) => {
      return <td>{item.public_repos}</td>;
    });
  };
  const getCompany = () => {
    return data.map((item) => {
      return <td>{item.company}</td>;
    });
  };
  const getLocation = () => {
    return data.map((item) => {
      return <td>{item.location}</td>;
    });
  };
  const getContributions = () => {
    return data.map((item) => {
      return (
        <td>
          {item.contributions.map((item) => {
            return <p>{`ano: ${item.year}, contribuições: ${item.total}`}</p>;
          })}
        </td>
      );
    });
  };

  return (
    <div className= 'content'>
      <table>
        <tbody>
          <tr key={'name-row'}>
            <td className='index-title'> </td>
            {getNames()}
          </tr>
          <tr key={'company-row'}>
            <td className='index-title'>Empresa atual</td>
            {getCompany()}
          </tr>
          <tr key={'location-row'}>
            <td className='index-title'>Localidade</td>
            {getLocation()}
          </tr>
          <tr key={'follower-row'}>
            <td className='index-title'>Seguidores</td>
            {getFollowers()}
          </tr>
          <tr key={'following-row'}>
            <td className='index-title'>Seguindo</td>
            {getFollowing()}
          </tr>
          <tr key={'repos-row'}>
            <td className='index-title'>Repositórios Públicos</td>
            {getPublicRepository()}
          </tr>
          <tr key={'contributions-row'}>
            <td className='index-title'>Contribuições e atividades</td>
            {getContributions()}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
