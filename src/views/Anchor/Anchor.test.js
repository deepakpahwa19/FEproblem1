import { mount, shallow } from 'enzyme';
import { AnchorView } from './AnchorView';

describe('verifying Anchor in Views', () => {
    let anchorName = 'testing anchor';
    it('verifying Anchor text', () => {
        const wrapper = shallow(<AnchorView anchorName={anchorName} />);
        expect(wrapper.text()).toEqual(anchorName);
    });

    it('hide backdrop', () => {
        const wrapper = mount(<AnchorView anchorName='' />);
        expect(wrapper.text()).toEqual('');
    });
});
