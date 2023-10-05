import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { setUser } from './store/user/user.slice';
import { setItems } from './store/item/item.slice';
import { setShowEnabledOnly, setShowOwnItemOnly, setShownItemTypes } from './store/app/app.slice';
import { ItemType, Item } from './types';
import { filteredItems } from './store/item/item.selector';

function App() {
  const { showEnabledOnly, showOwnItemOnly, shownItemTypes } = useAppSelector((state) => state.app);
  const items = useAppSelector(filteredItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userToSet = {
      username: 'EmokeJenoke',
      id: '947dbd612c1ffb2efccc0d2390e1210dffb817d9',
    };
    dispatch(setUser(userToSet));

    const itemsToSet: Item[] = [{
      name: 'cucc1',
      owner: '947dbd612c1ffb2efccc0d2390e1210dffb817d9',
      type: ItemType.PRIVATE,
      isEnabled: true,
    }, {
      name: 'cucc2',
      owner: '947dbd612c1ffb2efccc0d2390e1210dffb817d9',
      type: ItemType.PRIVATE,
      isEnabled: false,
    }, {
      name: 'cucc3',
      owner: '47acffc0c8fffe8771c60b19e24e276ace00cb64',
      type: ItemType.PUBLIC,
      isEnabled: true,
      
    }]
    dispatch(setItems(itemsToSet));
  }, []);

  const onItemTypeButtonClick = (buttonType: ItemType) => {
    const isIncluded = shownItemTypes.includes(buttonType);
    const newItemTypes = isIncluded ? shownItemTypes.filter((type) => type !== buttonType) : [...shownItemTypes, buttonType];
    dispatch(setShownItemTypes(newItemTypes));
  }

  return (
    <div className="app">
        <div className="controls">
          <div>
            <input type="checkbox" id="enabledOnly" name="enabledOnly" checked={showEnabledOnly} onChange={() => dispatch(setShowEnabledOnly(!showEnabledOnly))} />
            <label htmlFor="enabledOnly">Enabled Only</label>
          </div>
          <div>
            <input type="checkbox" id="enabledOnly" name="enabledOnly" checked={showOwnItemOnly} onChange={() => dispatch(setShowOwnItemOnly(!showOwnItemOnly))} />
            <label htmlFor="enabledOnly">Show Own item only</label>
          </div>
        </div>
        <div className="buttonContainer">
          <button className={shownItemTypes.includes(ItemType.PRIVATE) ? 'toggleButtonToggled' : 'toggleButton'} onClick={() => onItemTypeButtonClick(ItemType.PRIVATE)}>Private</button>
          <button className={shownItemTypes.includes(ItemType.PUBLIC) ? 'toggleButtonToggled' : 'toggleButton'} onClick={() => onItemTypeButtonClick(ItemType.PUBLIC)}>Public</button>
        </div>
        <div className="itemsTitle">Items:</div>
        <div className="items">
          {items && items.length > 0 && items.map(({isEnabled, name, owner, type}) => (
            <div key={name} className={isEnabled ? "item" : "disabledItem"}>{name} owner: {owner} type: {type}</div>
          )) }
        </div>
    </div>
  );
}

export default App;
