import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { TemplateService } from './template.service';
@Directive({
    selector: '[surround]'
})
export class SurroundDirective {
    
    constructor(
        private templateService: TemplateService,
        private view: ViewContainerRef,
        private template: TemplateRef<any>) {

    }

    ngAfterViewInit() {
        this.view.createEmbeddedView(this.templateService.templates.get('header'));
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.templateService.templates.get('footer'));
    }

}
