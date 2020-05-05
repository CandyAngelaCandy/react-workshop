import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomizeInput from './index';

describe('test CustomizeInput component', () => {
  test('component should init correctly label and input', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <CustomizeInput
        id="mockId"
        name="mockName"
        title="mockTitle"
        value="mockInputValue"
        errorMessage="mockErrorMessage"
        onChange={() => {}}
      />
    );

    const label = getByLabelText('mockTitle');
    const input = getByDisplayValue('mackInputValue');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('component should pass correct value when input change value', done => {
    const handleInputClick: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void = event => {
      expect(event.currentTarget.value).toBe('newInputValue');
      done();
    };

    const { getByDisplayValue } = render(
      <CustomizeInput
        id="mockId"
        name="mockName"
        title="mockTitle"
        value="mackInputValue"
        errorMessage="mockErrorMessage"
        onChange={handleInputClick}
      />
    );
    const input = getByDisplayValue('mackInputValue');
    fireEvent.change(input, { target: { value: 'newInputValue' } });
  });
});
