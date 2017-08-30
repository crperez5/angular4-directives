import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { TemplateService } from './template.service';

@Directive({
    selector: '[substitute]'
})
export class SubstituteDirective {
  
    @Input() set substitute(params) {
        this.view.createEmbeddedView(this.templateService.templates.get(params.templateKey), params.templateData);
    }


    constructor(
        private templateService: TemplateService,
        private view: ViewContainerRef,
        private template: TemplateRef<any>) {

    }



}
