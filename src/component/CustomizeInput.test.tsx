import React from 'react';
import { shallow } from 'enzyme';

import CustomizeInput from './CustomizeInput';

// @ts-ignore
describe('test CustomizeInput component', () => {
  test('should call callback when change value', () => {
    const setValueMock = jest.fn();
    // @ts-ignore
    const InputInstance = shallow(
      <CustomizeInput value="mackInputValue" setValue={setValueMock} />
    );
    InputInstance.find('input').simulate('change', {
      target: { value: 'Hello' }
    });
    expect(setValueMock).toHaveBeenCalled();
  });
});
