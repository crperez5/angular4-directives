# Angular 4 Structural Directives 

template-storage component registers all the different templates using the <template> tag.
<template> tag requires a ref for the template (ie. #template1) and the variables declaration (let-variable="something")
The component references the templates' HTML using the ViewChild decorator.
TemplateService is injected into its constructor.
In the ngOnInit hook, the component will save the templates into the TemplateService.

The substitute directive has the TemplateService and the ViewContainerRef injected.
The directive has a setter subtitute that when called it will replace the contents of the containing view.
This is achieved by invoking this.view.createEmbeddedView(template, context).

The surround directive has the same parameters but besides the TemplateRef is injected.
In the ngAfterViewInit hook, it created 3 embedded views in the following way:
this.view.createEmbeddedView(headerTemplate)
this.view.createEmbeddedView(this.template) // <-- TemplateRef here.
this.view.createEmbeddedView(footerTemplate)
