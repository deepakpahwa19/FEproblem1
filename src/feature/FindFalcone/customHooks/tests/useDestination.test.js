import { shallow } from 'enzyme';
import { useDestinations } from '../useDestinations';

describe('verifying useDestination in Feature/customHooks', () => {
    const destinations = [
        {
            name: 'Bangalore'
        },
        {
            name: 'Delhi'
        }
    ];
    let result;
    const renderHook = (hook, argument) => {
        function HookWrapper() {
            result = hook(argument);
            return null;
        }

        shallow(<HookWrapper />);
        return result;
    };
    it('Verifying useDestination hook', () => {
        renderHook(useDestinations, destinations);
        result[1]('', 'Delhi');

        expect(result[0][1]).toBeNull();

        result[1]('Delhi', 'Bangalore');

        expect(result[0][0]).toBeNull();
    });

    it('Verifying useDestination hook without passing argument', () => {
        renderHook(useDestinations);

        expect(result[0].length).toEqual(0);
    });
});
