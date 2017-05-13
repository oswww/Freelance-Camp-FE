import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;

  constructor(
    private proposalService: ProposalService
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 30000);
    timer.subscribe(() => this.getProposal())
  }

  getProposal() {
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        );
  }

}
