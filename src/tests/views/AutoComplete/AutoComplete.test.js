import { shallow } from 'enzyme';
import { AutoComplete } from '../../../views';

describe('Verifying AutoCompleteItem in View', () => {
    const props = {
        id: 'id-1',
        options: ['Delhi', 'Bangalore', 'Rishikesh'],
        onSelect: () => {},
        isValid: false
    };
    it('Verifying AutoComplete click and AutoCompleteItem is displaying', () => {
        const wrapper = shallow(<AutoComplete {...props} />);

        wrapper.childAt(0).simulate('click');

        expect(wrapper.childAt(1).props().isVisible).toEqual(true);
        expect(wrapper).toMatchSnapshot();
    });
});
