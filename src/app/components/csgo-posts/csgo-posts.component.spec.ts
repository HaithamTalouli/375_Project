import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoPostsComponent } from './csgo-posts.component';

describe('CsgoPostsComponent', () => {
  let component: CsgoPostsComponent;
  let fixture: ComponentFixture<CsgoPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsgoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
