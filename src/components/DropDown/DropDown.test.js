import { mount } from 'enzyme';

import { DropDownView } from '../../views';

describe('testing DropDownViewcomponent', () => {
    let selectedOption = '';
    const props = {
        name: 'Dropdown-1',
        options: ['option 1', 'option 2'],
        onChangeHandler: event => {
            selectedOption = event.target.value;
        },
        isValid: true
    };

    let wrapper = {};

    it('testing DropDownView on select change', () => {
        const event = { target: { value: props.options[0] } };

        wrapper = mount(<DropDownView {...props} />);
        let select = wrapper.find('select');

        expect(select).toBeTruthy();

        select.simulate('change', event);
        wrapper.setProps({ value: selectedOption });
        const { name, value } = wrapper.find('select').props();

        expect(name).toBe(props.name);
        expect(value).toBe(props.options[0]);
        expect(selectedOption).toBe(props.options[0]);
    });

    it('rendering DropDownViewcomponent if no props is passed', () => {
        wrapper = mount(<DropDownView />);

        let select = wrapper.find('select');
        expect(select).toBeTruthy();

        const { name, value } = wrapper.find('select').props();

        expect(name).toBe('');
        expect(value).toBe('Select');
    });

    afterEach(() => {
        wrapper.unmount();
    });
});
