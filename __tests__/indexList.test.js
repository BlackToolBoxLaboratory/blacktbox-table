import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from '../module/index.js';

configure({ adapter: new Adapter() });

var tableHeadArr = [
  {'name' : 'Name',              'index' : 'name'},
  {'name' : 'Type',              'index' : 'devType'},
  {'name' : 'OS',                'index' : 'osType'},
  {'name' : 'IP',                'index' : 'ipAddr'},
  {'name' : 'MAC',               'index' : 'macAddr'},
  {'name' : 'Traffic(tx / rx)',  'index' : 'traffic'},
  {'name' : 'Statue',            'index' : 'statusDesc'}
];

var tableBodyArr = [
  {'name' : 'Device 1',  'devType' : 'phone',   'osType' : 'ios',      'ipAddr' : '192.168.0.50',   'macAddr' : 'B4:A2:07:44:55:2A', 'traffic' : '0 MB / 0 KB',     'status' : 0, 'statusDesc' : 'Disconnected'},
  {'name' : 'Device 2',  'devType' : 'switch',  'osType' : 'linux',    'ipAddr' : '192.168.0.37',   'macAddr' : '7E:EF:02:44:AE:25', 'traffic' : '2.7 MB / 263 KB', 'status' : 1, 'statusDesc' : 'Connected'},
  {'name' : 'Device 3',  'devType' : 'ap',      'osType' : 'linux',    'ipAddr' : '192.168.0.121',  'macAddr' : 'EF:2B:15:44:32:B4', 'traffic' : '0 MB / 0 KB',     'status' : 2, 'statusDesc' : 'Locked'},
  {'name' : 'Device 4',  'devType' : 'phone',   'osType' : 'android',  'ipAddr' : '192.168.0.9',    'macAddr' : 'F5:22:33:44:55:35', 'traffic' : '0 MB / 0 KB',     'status' : 0, 'statusDesc' : 'Disconnected'},
  {'name' : 'Device 5',  'devType' : 'ap',      'osType' : 'linux',    'ipAddr' : '192.168.0.27',   'macAddr' : '7E:EF:B2:44:28:3B', 'traffic' : '1.3 MB / 725 KB', 'status' : 1, 'statusDesc' : 'Connected'},
  {'name' : 'Device 6',  'devType' : 'pc',      'osType' : 'windows',  'ipAddr' : '192.168.0.11',   'macAddr' : '11:22:24:44:5E:90', 'traffic' : '0 MB / 0 KB',     'status' : 2, 'statusDesc' : 'Locked'},
  {'name' : 'Device 7',  'devType' : 'phone',   'osType' : 'ios',      'ipAddr' : '192.168.0.6',    'macAddr' : '11:FF:33:44:55:A3', 'traffic' : '1.2 MB / 45 KB',  'status' : 1, 'statusDesc' : 'Connected'},
  {'name' : 'Device 8',  'devType' : 'pc',      'osType' : 'linux',    'ipAddr' : '192.168.0.3',    'macAddr' : 'B2:FE:B8:44:55:6D', 'traffic' : '4.8 MB / 3.7 MB', 'status' : 1, 'statusDesc' : 'Connected'},
  {'name' : 'Device 9',  'devType' : 'pc',      'osType' : 'windows',  'ipAddr' : '192.168.0.18',   'macAddr' : 'E4:AA:74:44:38:E1', 'traffic' : '0 MB / 0 KB',     'status' : 2, 'statusDesc' : 'Locked'},
  {'name' : 'Device 10', 'devType' : 'switch',  'osType' : 'linux',    'ipAddr' : '192.168.0.245',  'macAddr' : 'E2:BA:33:44:48:AB', 'traffic' : '0 MB / 0 KB',     'status' : 0, 'statusDesc' : 'Disconnected'},
  {'name' : 'Device 11', 'devType' : 'ap',      'osType' : 'linux',    'ipAddr' : '192.168.0.210',  'macAddr' : '2A:FE:7A:27:38:27', 'traffic' : '0 MB / 0 KB',     'status' : 0, 'statusDesc' : 'Disconnected'},
  {'name' : 'Device 12', 'devType' : 'phone',   'osType' : 'android',  'ipAddr' : '192.168.0.163',  'macAddr' : 'FE:22:9B:44:26:08', 'traffic' : '0 MB / 0 KB',     'status' : 2, 'statusDesc' : 'Locked'},
  {'name' : 'Device 13', 'devType' : 'phone',   'osType' : 'android',  'ipAddr' : '192.168.0.84',   'macAddr' : 'B4:22:27:44:55:B2', 'traffic' : '1.5 MB / 235 KB', 'status' : 1, 'statusDesc' : 'Connected'}
];

var modeObj = {
  'mode': 'list'
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
      'tr-td': {
        'font-size': '12px'
      },
      'th-name': {
        'background-color': '#85a5ff'
      },
      'tr-0': {
        'background-color': '#85a5ff'
      },
      'td-name': {
        'background-color': '#85a5ff'
      }
    };
    render.setProps(testProps);
  });
  test('Test search', () => {
    testProps['modeObj']['listFeatureSearch'] = {
      'enable': true
    };
    render.setProps(testProps);
  });
  test('Test sort', () => {
    testProps['modeObj']['listFeatureSort'] = {
      'enable': true
    };
    render.setProps(testProps);
  });
  test('Test page', () => {
    testProps['modeObj']['listFeaturePage'] = {
      'enable': true
    };
    render.setProps(testProps);
  });
  test('Test featureSearch', () => {
    testProps['modeObj']['listFeatureSearch'] = {
      'enable': true,
      'searchInputArr': ['123', 'Device'],
      'searchMatchRateTheshold': 2,
      'searchSpecAttributeEnable': false
    };
    render.setProps(testProps);

    testProps['modeObj']['listFeatureSearch'] = {
      'enable': true,
      'searchInputArr': ['123', 'Device'],
      'searchMatchRateTheshold': 0.5,
      'searchSpecAttributeEnable': true,
      'searchSpecAttributeArr': ['name', 'devType', 'osType', 'ipAddr', 'macAddr', 'status']
    };
    render.setProps(testProps);
  });
});
