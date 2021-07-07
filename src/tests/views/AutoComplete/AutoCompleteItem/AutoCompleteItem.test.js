import { shallow } from 'enzyme';
import { AutoCompleteItem } from '../../../../views';

describe('Verifying AutoCompleteItem in View', () => {
    let name = 'Bangalore';
    const onClickHandler = jest.fn();

    it('Verifying AutoCompleteItem default snapshot', () => {
        const wrapper = shallow(<AutoCompleteItem onSelectItem={onClickHandler} name={name} isHighlighted />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Verifying AutoCompleteItem click and name', () => {
        const wrapper = shallow(<AutoCompleteItem onSelectItem={onClickHandler} name={name} />);
        expect(wrapper.find('p').text()).toEqual(name);

        wrapper.simulate('click');
        wrapper.setProps({ name: 'Delhi' });

        expect(wrapper.find('p').text()).toEqual('Delhi');
        expect(wrapper).toMatchSnapshot();
    });
});
