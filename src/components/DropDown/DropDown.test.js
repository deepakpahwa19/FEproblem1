import { mount } from 'enzyme';

import { DropDown } from './DropDown';

describe('testing Dropdown component', () => {
    let selectedOption = '';
    const props = {
        name: 'Dropdown-1',
        options: ['option 1', 'option 2'],
        onChangeHandler: value => {
            selectedOption = value;
        },
        isValid: true
    };

    it('testing dropdown select change', () => {
        const event = { target: { value: props.options[0] } };

        const wrapper = mount(<DropDown {...props} />);
        let select = wrapper.find('select');

        expect(select).toBeTruthy();

        select.simulate('change', event);
        const { name, value } = wrapper.find('select').props();

        expect(name).toBe(props.name);
        expect(value).toBe(props.options[0]);
        expect(selectedOption).toBe(props.options[0]);

        wrapper.unmount();
    });

    it('rendering Dropdown component if no props is passed', () => {
        const wrapper = mount(<DropDown />);
        let select = wrapper.find('select');

        expect(select).toBeTruthy();

        const { name, value } = wrapper.find('select').props();
        expect(name).toBe(undefined);
        expect(value).toBe('');

        wrapper.unmount();
    });
});
