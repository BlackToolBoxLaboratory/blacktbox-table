import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from '../module/index.js';

configure({ adapter: new Adapter() });

var tableHeadArr = [
  {'name' : 'Name',              'index' : 'name'},
  {'name' : 'Type',              'index' : 'devType'},
  {'name' : 'OS',                'index' : 'osType'},
  {'name' : 'IP Address',        'index' : 'ipAddr'},
  {'name' : 'MAC Address',       'index' : 'macAddr'},
  {'name' : 'Traffic(tx / rx)',  'index' : 'traffic'},
  {'name' : 'Statue',            'index' : 'statusDesc'}
];

var tableBodyArr = [
  {'name' : 'Device 1',  'devType' : 'phone',   'osType' : 'ios',      'ipAddr' : '192.168.0.50',   'macAddr' : 'B4:A2:07:44:55:2A', 'traffic' : '1.7 MB / 45 KB', 'status' : 0, 'statusDesc' : 'Disconnected'},
  {'name' : 'Device 2',  'devType' : 'notebook',   'osType' : 'windows',      'ipAddr' : '192.168.0.52',   'macAddr' : 'B4:A2:07:44:DD:FF', 'traffic' : '4.8 MB / 27 KB', 'status' : 0, 'statusDesc' : 'Disconnected'}
];

var modeObj = {
  'mode': 'info'
};

describe('Test Render Table ... ', () => {
  var testProps = {};
  var render;
  test('With mount', () => {
    testProps = {
      'modeObj': modeObj
    };
    render = mount(<Table {...testProps} className='testCSS'/>);

    testProps = {
      'modeObj': modeObj,
      'tableHeadArr': tableHeadArr
    };
    render = mount(<Table {...testProps}/>);

    testProps = {
      'modeObj': modeObj,
      'tableHeadArr': tableHeadArr,
      'tableBodyArr': tableBodyArr
    };
    render = mount(<Table {...testProps}/>);
  });
  test('Test styleObj', () => {
    testProps['styleObj'] = {
      'tr-name': {
        'background-color': '#85a5ff'
      },
      'th-name': {
        'background-color': '#adc6ff'
      },
      'td-name': {
        'background-color': '#85a5ff'
      },
    };
    render.setProps(testProps);
  });
});
