import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
    selector: 'template-storage',
    templateUrl: './template-storage.component.html',
    styleUrls: ['./template-storage.component.css']
})
export class TemplateStorageComponent implements OnInit {

    @ViewChild('header') headerTemplate;
    @ViewChild('footer') footerTemplate;
    @ViewChild('welcomeMessage1') welcomeMessage1;
    @ViewChild('welcomeMessage2') welcomeMessage2;
    constructor(private templateService: TemplateService) { }

    ngOnInit() {
        this.templateService.templates.set('header', this.headerTemplate);
        this.templateService.templates.set('footer', this.footerTemplate);
        this.templateService.templates.set('welcomeMessage1', this.welcomeMessage1);
        this.templateService.templates.set('welcomeMessage2', this.welcomeMessage2);
    }


}
