import { shallow } from 'enzyme';
import { FooterView } from '../../../views';

describe('FooterView ', () => {
    it('rendering FooterView children', () => {
        const text = 'Testing FooterView children';
        const wrapper = shallow(
            <FooterView>
                <p>{text}</p>
            </FooterView>
        );
        expect(wrapper.find('p').text()).toBe(text);
    });
});
