import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStorageComponent } from './template-storage.component';

describe('TemplateStorageComponent', () => {
  let component: TemplateStorageComponent;
  let fixture: ComponentFixture<TemplateStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
