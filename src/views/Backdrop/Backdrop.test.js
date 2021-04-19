import { mount } from 'enzyme';
import { Backdrop } from './Backdrop';

describe('backdrop tests', () => {
    it('show backdrop', () => {
        const wrapper = mount(<Backdrop show />);
        expect(wrapper.find('div')).toBeTruthy();
    });

    it('hide backdrop', () => {
        const wrapper = mount(<Backdrop show={false} />);
        expect(wrapper.find('div')).toEqual({});
    });
});
