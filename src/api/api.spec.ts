import React from 'react';
import api from './index.service';

test('api github - get user', done => {
  const fetchData = async (value: string) => {
    try {
      const result = await api.get(value);
      expect(result.data.name).toBe('Mauricio Soto');
      expect(result.status).toBe(200);
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData('soto92');
});