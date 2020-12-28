import mapChooser from '../mapChooser';

describe('mapChooser', () => {
    it('returns an image file with given input', () => {
        let expected ='portland.jpg';
        let actual = mapChooser('portland');

        expect(actual).toEqual(expected);
    })
});