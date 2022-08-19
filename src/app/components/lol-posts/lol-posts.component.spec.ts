import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolPostsComponent } from './lol-posts.component';

describe('LolPostsComponent', () => {
  let component: LolPostsComponent;
  let fixture: ComponentFixture<LolPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LolPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
