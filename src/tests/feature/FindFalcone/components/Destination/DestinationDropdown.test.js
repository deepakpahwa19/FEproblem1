import { DestinationDropdown } from '../../../../../feature/FindFalcone/components/Destination/DestinationDropdown';
import { mount, shallow } from 'enzyme';

import { withStore } from '../../../withStore';
import { withContext } from '../../../withFalconeContext';

describe('DestinationDropdown Component', () => {
    let wrapper;

    beforeEach(() => {});

    it('should render the destination dropdown', () => {
        // expect(wrapper).toMatchSnapshot();
        wrapper = mount(withStore(withContext(<DestinationDropdown name='Destination' journeyIndex={0} />)));

        // wrapper = mount(<DestinationDropdown name='Destination' journeyIndex={0} />);
        wrapper.update();
        // console.log(wrapper.html());
        console.log(wrapper.debug());
        const searchInput = wrapper.find('input');
        searchInput.simulate('keydown', { key: 'Enter' });
        // const searchInput = wrapper.find('div').dive();
        // expect(searchInput.length).toEqual(1);
        // searchInput.simulate('keydown');
    });
});
