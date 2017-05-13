import { Component, Input } from '@angular/core';

import { Proposal } from '../proposal';

@Component({
  selector: 'proposal-content',
  templateUrl: './proposal-content.component.html',
  styleUrls: ['./proposal-content.component.css']
})
export class ProposalContentComponent {
  @Input() proposal: Proposal;
}
