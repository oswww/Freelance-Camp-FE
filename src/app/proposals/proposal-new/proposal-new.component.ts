import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';


@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css'],
  providers: [ ProposalService ],
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  submitting: boolean = false;
  submitted = false;
  constructor(
    private proposalService: ProposalService
  ) {}

  ngOnInit() {
  }

  createProposal(proposal) {
    this.submitting = true;
    this.proposalService.createProposal(proposal)
        .subscribe(
          date => true,
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        );
    this.submitted = true;
  }

}
