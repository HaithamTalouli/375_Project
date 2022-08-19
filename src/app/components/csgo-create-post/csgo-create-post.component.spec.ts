import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoCreatePostComponent } from './csgo-create-post.component';

describe('CsgoCreatePostComponent', () => {
  let component: CsgoCreatePostComponent;
  let fixture: ComponentFixture<CsgoCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsgoCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
