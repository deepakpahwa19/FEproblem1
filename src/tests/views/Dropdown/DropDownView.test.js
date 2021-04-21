import { mount } from 'enzyme';
import { DropDownView } from '../../../views';

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
        expect(wrapper).toMatchSnapshot();
    });

    it('Success validation does not display required message', () => {
        wrapper = mount(<DropDownView {...props} isValid={false} />);
        expect(wrapper.find('p')).toEqual({});
        expect(wrapper).toMatchSnapshot();
    });

    afterEach(() => {
        wrapper && wrapper.unmount();
    });
});
