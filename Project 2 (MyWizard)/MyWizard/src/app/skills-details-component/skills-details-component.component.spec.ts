import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDetailsComponentComponent } from './skills-details-component.component';

describe('SkillsDetailsComponentComponent', () => {
  let component: SkillsDetailsComponentComponent;
  let fixture: ComponentFixture<SkillsDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
