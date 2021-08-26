import { AxiosPromise, AxiosResponse } from 'axios';

import { createAxiosInstance } from 'api/BaseApi';

interface VoteResponse {
  vote: {
    id: number;
  };
  candidate: {
    id: number;
  };
  voter: {
    id: number;
  };
}

export interface VoteItem {
  id: number;
  name: string;
  description: string;
  startTimestamp: Date;
  endTimestamp: Date;
  isSuspended: boolean;
  isOpened: boolean;
}

type VotesResponse = VoteItem[];

export interface CandidateItem {
  id: number;
  name: string;
}

type CandidateResponse = CandidateItem[];

class VotingApi {
  vote(voteId: number, candidateId: number): AxiosPromise<VoteResponse> {
    return createAxiosInstance().post('api/vote', { voteId, candidateId });
  }

  votes(): AxiosPromise<VotesResponse> {
    return createAxiosInstance().get('api/votes');
  }

  candidates(voteId: number): AxiosPromise<CandidateResponse> {
    return createAxiosInstance().get(`api/candidates/${voteId}`);
  }
}

export default VotingApi;
