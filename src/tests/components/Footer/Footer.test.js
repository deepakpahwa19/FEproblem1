import { mount } from 'enzyme';

import { Footer } from './Footer';

describe('Verifying Footer component', () => {
    const h1Content = 'testing';
    it('Footer component functional testing', () => {
        const wrapper = mount(
            <Footer>
                <h1>{h1Content}</h1>
            </Footer>
        );
        expect(wrapper.find('footer')).toBeTruthy();
        expect(wrapper.find('h1').text()).toEqual(h1Content);
    });
});
