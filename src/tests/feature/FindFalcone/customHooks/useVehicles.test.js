import { shallow } from 'enzyme';
import { useVehicles } from '../../../../feature/FindFalcone/customHooks/useVehicles';

describe('verifying useDestination in Feature/customHooks', () => {
    const vehicles = [
        {
            name: 'Space Rocket',
            total_no: 2
        },
        {
            name: 'Air Rocket',
            total_no: 1
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
        renderHook(useVehicles, vehicles);
        result[1]('', 'Space Rocket');

        expect(result[0][0].total_no).toEqual(1);

        result[1]('Space Rocket', 'Air Rocket');

        expect(result[0][0].total_no).toEqual(2);
        expect(result[0][1].total_no).toEqual(0);
    });

    it('Verifying useDestination hook without passing argument', () => {
        renderHook(useVehicles);
        // result[1]('', 'Space Rocket');

        expect(result[0].length).toEqual(0);
    });
});
