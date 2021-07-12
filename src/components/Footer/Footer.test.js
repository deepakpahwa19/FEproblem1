import { mount } from 'enzyme';

import { FooterView } from '../../views';

describe('Verifying Footer component', () => {
    const h1Content = 'testing';
    it('Footer component functional testing', () => {
        const wrapper = mount(
            <FooterView>
                <h1>{h1Content}</h1>
            </FooterView>
        );
        expect(wrapper.find('footer')).toBeTruthy();
        expect(wrapper.find('h1').text()).toEqual(h1Content);
    });
});
