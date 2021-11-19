import { render, screen, fireEvent } from '@testing-library/react';
import App, {processToDoubleArray} from './App';

test('renders', () => {
  render(<App />);
  expect(screen.getByTestId('input-title')).toHaveTextContent('Input');

  expect(screen.getByTestId('output-title')).toHaveTextContent('Output');
});

test('input on change', () => {
  const wrapper = render(<App/>);
  const input = wrapper.getByTestId('input-input');
  fireEvent.change(input, {target: {value: '23'}});
  expect(input.value).toBe('23');

  const output = wrapper.getByTestId('output-input');
  expect(output.value).toBe('46');
});

test('processDoubleArray', () => {
  expect(processToDoubleArray('1, 2, 3 ,a, b, 40,500 ,, , ,6000')).toBe('2,4,6,a,b,80,1000,12000');
});