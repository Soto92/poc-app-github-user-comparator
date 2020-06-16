import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

test('Button - renders correctly', () => {
  const tree = renderer
    .create(<Button onClick={() => jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();

});

test('Button - test onClick', () => {
  const press = jest.fn();
  const tree = renderer.create(<Button onClick={press} />);
  const instance = tree.root;
  
  expect(press).toBeCalledTimes(0);

  expect(instance.findByProps({className: 'button'}).props.onClick());
  expect(press).toBeCalledTimes(1);
});
