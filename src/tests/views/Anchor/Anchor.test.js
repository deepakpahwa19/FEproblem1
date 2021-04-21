import { shallow } from 'enzyme';
import { AnchorView } from '../../../views';

describe('verifying Anchor in Views', () => {
    let anchorName = 'testing anchor';
    it('verifying Anchor text', () => {
        const wrapper = shallow(<AnchorView anchorName={anchorName} />);
        expect(wrapper.text()).toEqual(anchorName);
        expect(wrapper).toMatchSnapshot();
    });

    it('hide backdrop', () => {
        const wrapper = shallow(<AnchorView anchorName='' />);
        expect(wrapper.text()).toEqual('');
        expect(wrapper).toMatchSnapshot();
    });
});
