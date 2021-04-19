import { mount } from 'enzyme';
import { JourneyCardView } from './JourneyCardView';

describe('JourneyCardView ', () => {
    let wrapper = null;

    it('rendering JourneyCardView children', () => {
        const text = 'Testing JourneyCardView children';
        wrapper = mount(
            <JourneyCardView>
                <p>{text}</p>
            </JourneyCardView>
        );
        expect(wrapper.find('p').text()).toBe(text);
    });

    afterEach(() => {
        wrapper && wrapper.unmount();
    });
});
