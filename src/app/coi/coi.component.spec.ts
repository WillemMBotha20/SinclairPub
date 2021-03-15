import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiComponent } from './coi.component';

describe('CoiComponent', () => {
  let component: CoiComponent;
  let fixture: ComponentFixture<CoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
