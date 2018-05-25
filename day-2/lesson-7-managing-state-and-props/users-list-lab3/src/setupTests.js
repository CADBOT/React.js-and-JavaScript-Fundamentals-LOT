import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
