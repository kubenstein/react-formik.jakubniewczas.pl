import md5 from 'blueimp-md5';
import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ email, firstName, lastName }) => ({
  imgSrc: `http://www.gravatar.com/avatar/${md5(email)}`,
  fullName: `${firstName} ${lastName}`,
});

export default connect(mapStateToProps)(Component);
