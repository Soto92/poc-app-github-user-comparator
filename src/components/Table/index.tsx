import React, {ReactElement} from 'react';
import {ResultGitHub} from '../search/types';

export interface TableProps {
  data: ResultGitHub[];
}

const Table: React.FC<TableProps> = (props): ReactElement => {
  const {data} = props;
  console.log(data);

  return (
    <div>
      <table>
        <tbody>
          <tr key={'x'}>
            <td>-----</td>
            <td></td>
            <td>27</td>
            <td>masasas</td>
          </tr>
          <tr key={'x'}>
            <td>x</td>
            <td>x</td>
            <td>27</td>
            <td>masasas</td>
          </tr>
          <tr key={'x'}>
            <td>x</td>
            <td>x</td>
            <td>27</td>
            <td>masasas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
