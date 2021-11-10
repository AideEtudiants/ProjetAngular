import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteGraphiqueComponent } from './charte-graphique.component';

describe('CharteGraphiqueComponent', () => {
  let component: CharteGraphiqueComponent;
  let fixture: ComponentFixture<CharteGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharteGraphiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharteGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
