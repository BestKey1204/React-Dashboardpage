import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/icons/chat.png'
import ReactFlagsSelect from 'react-flags-select';

import routes from '../../routes';
import {
  AppBreadcrumb,
} from '@coreui/react';
const propTypes = {
  children: PropTypes.node,
};
global.country_code = 'US';

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand style={{justifyContent:'start', marginLeft: 10}}
          full={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
          minimized={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <div style={{width: 168,textAlign: 'right'}}>
          <ReactFlagsSelect
          onSelect={(code) => global.country_code = code}
          countries={["US", "GB", "FR", "DE", "IT", "NG"]} customLabels={{"US": "US","GB": "GB","FR": "FR","DE": "DE","IT": "IT", "NG":"NG"}} defaultCountry="US" />
        </div>
        <AppBreadcrumb appRoutes={routes}/>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
