import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle, menuLinks }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {Object.entries(menuLinks).map(([link, value], idx) =>
                        <SidebarLink to={link} onClick={toggle} key={idx}>
                            {value}
                        </SidebarLink>
                    )}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
