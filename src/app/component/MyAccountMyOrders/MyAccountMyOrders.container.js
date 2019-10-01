/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';
import { OrderDispatcher } from 'Store/Order';
import MyAccountMyOrders from './MyAccountMyOrders.component';

export const mapStateToProps = state => ({
    orderList: state.OrderReducer.orderList
});

export const mapDispatchToProps = dispatch => ({
    getOrderList: () => OrderDispatcher.getOrderList(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountMyOrders);
