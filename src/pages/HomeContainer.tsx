import React from 'react';

import GnbHeader from 'components/base/GnbHeader';
import PageLayout from 'components/base/PageLayout';

import HomeView from './HomeView';

const HomeContainer = () => {
  return (
    <PageLayout topbar={<GnbHeader />}>
      <HomeView />
    </PageLayout>
  );
};

export default HomeContainer;
