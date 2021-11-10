import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardsComponent = lazy(() => import('./dashboards'));
const ApplicationsComponent = lazy(() => import('./apps'));
const DomainsComponent = lazy(() => import('./domains'));
const NetworkComponent = lazy(() => import('./network'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                {/* Dashboards */}
                <Route exact path={SLUGS.dashboards} component={DashboardsComponent} />
                <Route exact path={SLUGS.dashboardsAdmin} render={() => <div>dashboardsAdmin</div>} />
                <Route exact path={SLUGS.dashboardsAnalyst} render={() => <div>dashboardsAnalyst</div>} />
                <Route exact path={SLUGS.dashboardsCrypto} render={() => <div>dashboardsCrypto</div>} />
                {/* Applications  */}
                <Route exact path={SLUGS.applications} component={ApplicationsComponent} />
                <Route exact path={SLUGS.applicationsEmail} render={() => <div>applicationsEmail</div>} />
                <Route exact path={SLUGS.applicationsFileManager} render={() => <div>applicationsFileManager</div>} />
                <Route exact path={SLUGS.applicationsProductivity} render={() => <div>applicationsProductivity</div>} />
                <Route exact path={SLUGS.applicationsNotes} render={() => <div>applicationsNotes</div>} />
                {/* Network */}
                <Route exact path={SLUGS.network} component={NetworkComponent} />
                <Route exact path={SLUGS.networkDomainManager} render={() => <div>networkDomainManager</div>} />
                <Route exact path={SLUGS.networkDnsManager} render={() => <div>networkDnsManager</div>} />
                <Route exact path={SLUGS.networkTransferIn} render={() => <div>networkTransferIn</div>} />
                <Route exact path={SLUGS.networkTransferOut} render={() => <div>networkTransferOut</div>} />
                <Route exact path={SLUGS.networkEducation} render={() => <div>networkEducation</div>} />
                {/* Domains */}
                <Route exact path={SLUGS.domains} component={DomainsComponent} />
                <Route exact path={SLUGS.domainsManager} render={() => <div>domainsManager</div>} />
                <Route exact path={SLUGS.networkDnsManager} render={() => <div>networkDnsManager</div>} />
                <Route exact path={SLUGS.networkTransferIn} render={() => <div>networkTransferIn</div>} />
                <Route exact path={SLUGS.networkTransferOut} render={() => <div>networkTransferOut</div>} />
                <Route exact path={SLUGS.networkEducation} render={() => <div>networkEducation</div>} />
                {/* Other */}
                {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} /> */}
                <Route exact path={SLUGS.manage} render={() => <div>manage</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
