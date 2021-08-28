import React from 'react';

import PrivatePage from 'components/guard/PrivatePage';

import VoteHomeContainer from './VoteHomeContainer';

const VotePage = () => {
  return (
    <PrivatePage>
      <VoteHomeContainer />
    </PrivatePage>
  );
};

export default VotePage;
