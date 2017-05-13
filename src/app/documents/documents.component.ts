import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [ DocumentService ],
})
export class DocumentsComponent implements OnInit {
  pageTitle = "Dashboard Component";
  documents: Document[];
  errorMessage: string;

  constructor(
    private documentService: DocumentService
    ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 2000);
    timer.subscribe(() => this.getDcouments())
  }

  getDcouments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
