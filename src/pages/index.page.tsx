import React from 'react';

import PageLayout from 'components/base/PageLayout';
import GnbHeader from 'components/base/GnbHeader';

const IndexPage = () => {
  return (
    <PageLayout topbar={<GnbHeader />}>
      <div>Hi!</div>
    </PageLayout>
  );
};

export default IndexPage;
