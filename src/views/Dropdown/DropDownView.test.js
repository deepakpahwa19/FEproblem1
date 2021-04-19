import { mount } from 'enzyme';
import { DropDownView } from './DropDownView';

describe('DropdownView ', () => {
    let selectedOption = '';
    const props = {
        name: 'Dropdown-1',
        options: ['option 1', 'option 2'],
        onChangeHandler: value => {
            selectedOption = value;
        },
        isValid: true
    };

    let wrapper = null;

    it('Failed validation display required message', () => {
        wrapper = mount(<DropDownView {...props} />);
        expect(wrapper.find('p').text()).toBe('*required');
    });

    it('Success validation does not display required message', () => {
        wrapper = mount(<DropDownView {...props} isValid={false} />);
        expect(wrapper.find('p')).toEqual({});
    });

    afterEach(() => {
        wrapper && wrapper.unmount();
    });
});
