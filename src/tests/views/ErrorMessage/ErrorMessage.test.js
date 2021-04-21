import { shallow } from 'enzyme';
import { ErrorMessage } from '../../../views';

describe('Verifying ErrorMessage in View', () => {
    const errorMessage = 'There is an error triggered';
    it('Verifying ErrorMessage ', () => {
        const wrapper = shallow(<ErrorMessage>{errorMessage}</ErrorMessage>);
        expect(wrapper.text()).toEqual(errorMessage);
        expect(wrapper).toMatchSnapshot();
    });
});
