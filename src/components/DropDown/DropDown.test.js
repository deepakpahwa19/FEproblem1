import { mount, shallow } from 'enzyme';

import { DropDown } from './DropDown';

describe('Testing Dropdown.js file', () => {
    const props = {
        name: 'Dropdown-1',
        options: ['option 1', 'option 2'],
        onChangeHandler: () => {},
        isValid: true
    };

    it('renders without crashing', () => {
        shallow(<DropDown />);
    });
    it('renders dropdown header', () => {
        const wrapper = mount(<DropDown {...props} />);
        // const h1 = <h1>Testing Jest</h1>;
        expect(wrapper.props().name).toEqual(props.name);
    });
});
