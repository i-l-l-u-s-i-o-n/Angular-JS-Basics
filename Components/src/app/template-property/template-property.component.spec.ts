import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePropertyComponent } from './template-property.component';

describe('TemplatePropertyComponent', () => {
  let component: TemplatePropertyComponent;
  let fixture: ComponentFixture<TemplatePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
