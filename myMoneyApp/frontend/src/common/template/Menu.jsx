import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="dashboard" icon="dashboard"/>
        <MenuTree>
            <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon="usd"/>
        </MenuTree>
    </ul>
)