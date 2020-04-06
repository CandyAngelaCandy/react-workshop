import React from 'react';
import { shallow } from 'enzyme';

import CustomizeInput from './CustomizeInput';

// @ts-ignore
describe('test CustomizeInput component', () => {
  test('should call callback when change value', () => {
    const setValueMock = jest.fn();
    // @ts-ignore
    const InputInstance = shallow(
      <CustomizeInput
        id="mockId"
        name="mockName"
        title="mockTitle"
        value="mackInputValue"
        setValue={setValueMock}
      />
    );
    InputInstance.find('input').simulate('change', {
      target: { value: 'Hello' }
    });
    expect(setValueMock).toHaveBeenCalled();
  });
  test('should render correct text', () => {
    const setValueMock = jest.fn();

    const InputInstance = shallow(
      <CustomizeInput
        id="mockId"
        name="mockName"
        title="mockTitle"
        value="mackInputValue"
        setValue={setValueMock}
      />
    );

    expect(InputInstance.find('.title').text()).toBe('mockTitle');

    expect(InputInstance.find('#mockId').props().value).toBe('mackInputValue');
  });
});
