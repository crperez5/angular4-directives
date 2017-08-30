import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { TemplateService } from './template.service';
import { TemplateStorageComponent } from './template-storage/template-storage.component';
import { SurroundDirective } from './surround.directive';
import { SubstituteDirective } from './substitute.directive';


@NgModule({
    declarations: [
        AppComponent,
        TemplateStorageComponent,
        SurroundDirective,        
        SubstituteDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        { provide: 'api', useValue: '/api/fake/0' },
        TemplateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
