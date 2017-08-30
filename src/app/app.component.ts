import { Component, Inject, ViewChild, ViewContainerRef  } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    substituteParams =  {
        templateKey: 'welcomeMessage2',
        templateData: { name: 'Cristian' } 
    }
          
    
}
