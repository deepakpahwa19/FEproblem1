import { mount } from 'enzyme';
import { Backdrop } from '../../../views';

describe('backdrop tests', () => {
    it('show backdrop', () => {
        const wrapper = mount(<Backdrop show />);
        expect(wrapper.find('div')).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it('hide backdrop', () => {
        const wrapper = mount(<Backdrop show={false} />);
        expect(wrapper.find('div')).toEqual({});
        expect(wrapper).toMatchSnapshot();
    });
});
