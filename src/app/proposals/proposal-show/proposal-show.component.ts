import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css'],
  providers: [ProposalService],
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private proposalService: ProposalService,
    private route: ActivatedRoute
  ) {}

  @Input()
  proposal: Proposal;

  ngOnInit() {
    let proposalRequest = this.route.params
        .flatMap((params: Params) => 
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(proposal => this.proposal = proposal)
  }
}
