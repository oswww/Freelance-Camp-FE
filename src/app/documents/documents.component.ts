import { Component, OnInit } from '@angular/core';

import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle = "Dashboard Component";

  documents: Document[] = [
    {
      title: 'my first doc',
      description: 'asdfasf',
      file_url: 'http://gogole.com',
      updated_at: '11/11/16',
      image_url: 'http://gogole.com',
    },
    {
      title: 'my second doc',
      description: 'asdfasf',
      file_url: 'http://gogole.com',
      updated_at: '11/11/16',
      image_url: 'http://gogole.com',
    },
    {
      title: 'my last doc',
      description: 'asdfasf',
      file_url: 'http://gogole.com',
      updated_at: '11/11/16',
      image_url: 'http://gogole.com',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
