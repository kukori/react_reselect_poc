import { enabledItems } from '../item.selector';
import { Item, ItemType } from '../../../types';

describe('enabledItems', () => {
    it('returns the enabled items only', () => {
        const showEnabledOnly = true;
        const items: Item[] = [
            {
                name: 'cucc1',
                owner: 'a',
                type: ItemType.PRIVATE,
                isEnabled: true,
            },
            {
                name: 'cucc2',
                owner: 'b',
                type: ItemType.PUBLIC,
                isEnabled: false,
            },
        ];

        const expectedOutput = [
            {
                name: 'cucc1',
                owner: 'a',
                type: ItemType.PRIVATE,
                isEnabled: true,
            },
        ];
  
      expect(enabledItems.resultFunc(items, showEnabledOnly)).toEqual(expectedOutput)
    })
})