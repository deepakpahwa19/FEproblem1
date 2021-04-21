import { shallow } from 'enzyme';
import { Button } from '../../../views';

describe('Verifying Button in View', () => {
    let count = 0;
    const onClickHandler = () => count++;
    it('Verifying Button click and name', () => {
        const wrapper = shallow(<Button onClick={onClickHandler}>{count}</Button>);
        wrapper.simulate('click');
        expect(count).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('Verifying Button without click', () => {
        const buttonText = 'Click here!!';
        const wrapper = shallow(<Button>{buttonText}</Button>);
        expect(wrapper.text()).toEqual(buttonText);
        expect(wrapper).toMatchSnapshot();
    });
});
