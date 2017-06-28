/**
 * StorePicker Component.
 */
import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

  gotoStore (event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render () {
    return (
        <form action="" className="store-selector" onSubmit={(e) => this.gotoStore(e)}>
          {/* comments in  jsx and must be inside of jsx, not on the first line of jsx */}<h2>Please Enter A Store</h2>
          <input type="text" required placeholder='Store Name' defaultValue={ getFunName() } ref={ (input) => {
            this.storeInput = input
          }}/>
          <button type='submit'>Visit Store -></button>
        </form>
    )
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
