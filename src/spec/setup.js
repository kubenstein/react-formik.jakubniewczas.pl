import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';

Enzyme.configure({ adapter: new Adapter() });

global.chai = chai;
global.expect = chai.expect;
global.chai.use(dirtyChai);
global.chai.use(sinonChai);
