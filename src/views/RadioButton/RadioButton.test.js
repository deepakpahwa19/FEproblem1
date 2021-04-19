import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton';

describe('RadioButton ', () => {
    let wrapper = null;

    const props = {
        name: 'radio button label',
        value: 'test-value',
        isChecked: false,
        isDisabled: false,
        onChangeHandler: () => {},
        label: 'test-label'
    };

    it('verifying RadioButton default behaviour', () => {
        wrapper = shallow(<RadioButton {...props}></RadioButton>);
        expect(wrapper.text()).toEqual(props.label);

        const { name, value, checked, disabled } = wrapper.find({ type: 'radio' }).props();
        expect(name).toBe(props.name);
        expect(value).toBe(props.value);
        expect(checked).toBe(false);
        expect(disabled).toBe(false);
    });

    it('verifying RadioButton checked and disabled', () => {
        wrapper = shallow(<RadioButton {...props} isChecked={true} isDisabled={true}></RadioButton>);
        // expect(wrapper.find('label').text()).toBe(props.label);
        // wrapper.find('input').simulate('click');
        const { name, value, checked, disabled } = wrapper.find({ type: 'radio' }).props();
        expect(name).toBe(props.name);
        expect(value).toBe(props.value);
        expect(checked).toBe(true);
        expect(disabled).toBe(true);
    });
});
