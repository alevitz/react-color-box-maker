import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function () {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('shows box on page when submit form to add box', () => {
  const { getByText, getByLabelText, getByTestId, queryByText } = render(<BoxList />);

  expect(queryByText('X')).not.toBeInTheDocument();
  
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');
  const submitBtn = getByText('Submit');
  
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(submitBtn);
  
  const box = getByTestId('box');
  expect(box).toBeInTheDocument();

});

it('removes box when clicking remove button', () => {
  const { getByText, getByLabelText, getByTestId, queryByText } = render(<BoxList />);

  expect(queryByText('X')).not.toBeInTheDocument();
  
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');
  const submitBtn = getByText('Submit');
  
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(submitBtn);

  const box = getByTestId('box');
  const removeBtn = getByText('X');
  fireEvent.click(removeBtn);

  expect(box).not.toBeInTheDocument();
});