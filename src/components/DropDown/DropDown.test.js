import { mount } from 'enzyme';

import { DropDown } from './DropDown';

describe('Testing Dropdown.js file', () => {
    let selectedOption = '';
    const props = {
        name: 'Dropdown-1',
        options: ['option 1', 'option 2'],
        onChangeHandler: value => {
            selectedOption = value;
        },
        isValid: true
    };

    it('renders to test children', () => {
        const event = { target: { value: props.options[0] } };

        const wrapper = mount(<DropDown {...props} />);
        let select = wrapper.find('select');

        expect(select).toBeTruthy();

        select.simulate('change', event);
        const { name, value } = wrapper.find('select').props();

        expect(name).toBe(props.name);
        expect(value).toBe(props.options[0]);
        expect(selectedOption).toBe(props.options[0]);
    });
});
