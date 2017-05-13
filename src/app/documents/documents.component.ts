import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [ DocumentService ],
})
export class DocumentsComponent implements OnInit, OnDestroy {
  pageTitle = "Dashboard Component";
  documents: Document[];
  errorMessage: string;
  subscription: Subscription;

  constructor(
    private documentService: DocumentService
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 2000);
    this.subscription = timer.subscribe(() => this.getDcouments())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getDcouments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
