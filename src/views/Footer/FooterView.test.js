import { mount } from 'enzyme';
import { FooterView } from './FooterView';

describe('FooterView ', () => {
    let wrapper = null;

    it('rendering FooterView children', () => {
        const text = 'Testing FooterView children';
        wrapper = mount(
            <FooterView>
                <p>{text}</p>
            </FooterView>
        );
        expect(wrapper.find('p').text()).toBe(text);
    });

    afterEach(() => {
        wrapper && wrapper.unmount();
    });
});
