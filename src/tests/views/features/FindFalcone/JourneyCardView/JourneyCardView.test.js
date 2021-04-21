import { shallow } from 'enzyme';
import { JourneyCardView } from '../../../views';

describe('JourneyCardView ', () => {
    it('rendering JourneyCardView children', () => {
        const text = 'Testing JourneyCardView children';
        const wrapper = shallow(
            <JourneyCardView>
                <p>{text}</p>
            </JourneyCardView>
        );
        expect(wrapper.find('p').text()).toBe(text);
        expect(wrapper).toMatchSnapshot();
    });
});
