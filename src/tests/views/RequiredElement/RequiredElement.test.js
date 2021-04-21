import { shallow } from 'enzyme';
import { RequiredElement } from '../../../views';

describe('Verifying RequiredElement in View', () => {
    it('Verifying RequiredElement default message', () => {
        const wrapper = shallow(<RequiredElement />);

        expect(wrapper.text()).toEqual('*required');
        expect(wrapper).toMatchSnapshot();
    });

    it('Verifying RequiredElement passed message', () => {
        const validationMessage = 'mandatory';
        const wrapper = shallow(<RequiredElement message={validationMessage} />);

        expect(wrapper.text()).toEqual(validationMessage);
        expect(wrapper).toMatchSnapshot();
    });
});
