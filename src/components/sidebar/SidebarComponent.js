import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    // IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    // IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboards}
                items={[SLUGS.dashboardsAdmin, SLUGS.dashboardsCrypto, SLUGS.dashboardsAnalyst, SLUGS.dashboardsSaas]}
                title='Dashboards'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.dashboardsAdmin}
                    title='Admin'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.dashboardsAdmin)}
                />
                <MenuItem
                    id={SLUGS.dashboardsAnalyst}
                    title='Analyst'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.dashboardsAnalyst)}
                />
                <MenuItem
                    id={SLUGS.dashboardsCrypto}
                    title='Crypto'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.dashboardsCrypto)}
                />
                 <MenuItem
                    id={SLUGS.dashboardsSaas}
                    title='Saas'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.dashboardsSaas)}
                />
            </MenuItem>
            {/* Applications */}
            <MenuItem
                id={SLUGS.applications}
                items={[SLUGS.applicationsEmail, SLUGS.applicationsFileManager, SLUGS.applicationsProductivity, SLUGS.applicationsNotes]}
                title='Applications'
                icon={IconOverview}
                onClick={() => onClick(SLUGS.applicationsEmail)}
            >
                <MenuItem
                    id={SLUGS.applicationsEmail}
                    title='Email'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.applicationsEmail)}
                />
                <MenuItem
                    id={SLUGS.applicationsFileManager}
                    title='File Manager'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.applicationsFileManager)}
                />
                <MenuItem
                    id={SLUGS.applicationsProductivity}
                    title='Productivity'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.applicationsProductivity)}
                />
                <MenuItem
                    id={SLUGS.applicationsNotes}
                    title='Notes'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.applicationsNotes)}
                />
            </MenuItem>
            {/* Network */}
            <MenuItem
                id={SLUGS.network}
                items={[SLUGS.networkDomainManager, SLUGS.networkDnsManager, SLUGS.networkTransferIn, SLUGS.networkTransferIn, SLUGS.networkEducation]}
                title='DNS'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.networkDnsRecords}
                    title='DNS Records'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.networkDnsRecords)}
                />
                <MenuItem
                    id={SLUGS.networkDnsQueryTools}
                    title='DNS Query Tools'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.networkDnsQueryTools)}
                />
                <MenuItem
                    id={SLUGS.networkDnsPropogation}
                    title='Propagation'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.networkDnsPropogation)}
                />
                <MenuItem
                    id={SLUGS.networkResources}
                    title='Resources'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.networkResources)}
                />
            </MenuItem>
            {/* Domains */}
            <MenuItem
                id={SLUGS.domains}
                items={[SLUGS.domainsManager, SLUGS.networkDnsManager, SLUGS.networkTransferIn, SLUGS.networkTransferIn, SLUGS.networkEducation]}
                title='Domains'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.domainsManager}
                    title='Domain List'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.domainsManager)}
                />
                <MenuItem
                    id={SLUGS.domainsNameServers}
                    title='Name Servers'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.domainsNameServers)}
                />
                <MenuItem
                    id={SLUGS.domainsTransferIn}
                    title='Transfer In'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.domainsTransferIn)}
                />
                <MenuItem
                    id={SLUGS.domainsTransferOut}
                    title='Transfer Out'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.domainsTransferOut)}
                />
                <MenuItem
                    id={SLUGS.domainsResources}
                    title='Resources'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.domainsResources)}
                />
            </MenuItem>
            {/* <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.tickets)}
            />
            <MenuItem
                id={SLUGS.ideas}
                items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Ideas'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.ideas}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
                <MenuItem
                    id={SLUGS.ideasTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.ideasTwo)}
                />
                <MenuItem
                    id={SLUGS.ideasThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.ideasThree)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.contacts}
                title='Contacts'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.contacts)}
            />
            <MenuItem
                id={SLUGS.agents}
                title='Agents'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.agents)}
            />
            <MenuItem
                id={SLUGS.articles}
                title='Articles'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.articles)}
            /> */}
            {/* <MenuItem
                id={SLUGS.subscription}
                title='Subscription'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.subscription)}
            /> */}
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />
            <MenuItem
                id={SLUGS.manage}
                title='Manage'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.manage)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;