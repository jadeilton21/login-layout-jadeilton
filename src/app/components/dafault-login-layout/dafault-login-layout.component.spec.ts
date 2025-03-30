import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DafaultLoginLayoutComponent } from './dafault-login-layout.component';

describe('DafaultLoginLayoutComponent', () => {
  let component: DafaultLoginLayoutComponent;
  let fixture: ComponentFixture<DafaultLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DafaultLoginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DafaultLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
