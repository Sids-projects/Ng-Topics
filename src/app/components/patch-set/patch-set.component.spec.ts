import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchSetComponent } from './patch-set.component';

describe('PatchSetComponent', () => {
  let component: PatchSetComponent;
  let fixture: ComponentFixture<PatchSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatchSetComponent]
    });
    fixture = TestBed.createComponent(PatchSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
