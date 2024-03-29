import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'wolfy87-eventemitter';

const Context = React.createContext();

const StateConsumer = Context.Consumer;

const stateUpdater = new EventEmitter();

const StateProvider = ({ children, initialState = {} }) => {
  const [state, setState] = useState(initialState);

  stateUpdater.once('change', (keyValueObj) => {
    setState({ ...state, ...keyValueObj });
  });

  const context = {
    state,
    updateState: (keyValueObj) => {
      stateUpdater.emitEvent('change', [keyValueObj]);
    },
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

StateProvider.propTypes = {
  initialState: PropTypes.shape(),
  children: PropTypes.node,
};

export {
  StateProvider,
  StateConsumer,
};
