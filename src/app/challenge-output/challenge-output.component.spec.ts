import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOutputComponent } from './challenge-output.component';

describe('ChallengeOutputComponent', () => {
  let component: ChallengeOutputComponent;
  let fixture: ComponentFixture<ChallengeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
