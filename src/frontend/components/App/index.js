import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ editMode }) => ({
  editMode,
});

export default connect(mapStateToProps)(Component);
