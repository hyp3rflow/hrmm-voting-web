import React from 'react';
import { useRouter } from 'next/router';

import GnbHeader from 'components/base/GnbHeader';
import PageLayout from 'components/base/PageLayout';
import VotingApi, { CandidateItem, VoteItem } from 'api/VotingApi';

import VoteView from './VoteView';

interface VoteContainerProps {
  voteId: number | null;
}

const VoteContainer = ({ voteId }: VoteContainerProps) => {
  const router = useRouter();
  const [voteInformation, setVoteInformation] = React.useState<VoteItem>();
  const [candidates, setCandidates] = React.useState<CandidateItem[]>([]);
  const [selectedCandidateId, setSelectedCandidateId] =
    React.useState<number>();

  const handleSubmit = React.useCallback(() => {
    if (voteId == null) {
      return alert('예기치 못한 에러가 발생했습니다.');
    }
    if (selectedCandidateId == null) {
      return alert('투표 후보를 골라주세요.');
    }
    const votingApi = new VotingApi();
    (async () => {
      try {
        const selectedCandidate = candidates.find(
          candidate => candidate.id === selectedCandidateId
        );
        if (confirm(`"${selectedCandidate?.name}"에 투표하시겠습니까?`)) {
          await votingApi.vote(voteId, selectedCandidateId);
          alert('투표를 완료했습니다.');
          router.back();
        }
      } catch (e) {
        alert('에러가 발생했습니다. 다시 시도해주세요.');
      }
    })();
  }, [router, candidates, voteId, selectedCandidateId]);

  React.useEffect(() => {
    if (voteId == null) return;
    const votingApi = new VotingApi();
    (async () => {
      try {
        const voteResponse = await votingApi.getVoteInformation(voteId);
        const candidateResponse = await votingApi.candidates(voteId);
        setVoteInformation(voteResponse.data);
        setCandidates(candidateResponse.data);
      } catch (e) {
        alert(
          '선거 정보를 불러오는 데에 실패했습니다. 메인 페이지로 이동합니다.'
        );
        await router.push('/');
      }
    })();
  }, [voteId, router]);

  return (
    <PageLayout topbar={<GnbHeader />}>
      <VoteView
        onSubmit={handleSubmit}
        selectedCandidateId={selectedCandidateId}
        setSelectedCandidateId={setSelectedCandidateId}
        vote={voteInformation}
        candidates={candidates}
      />
    </PageLayout>
  );
};

export default VoteContainer;
