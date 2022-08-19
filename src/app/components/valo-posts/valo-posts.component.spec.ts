import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoPostsComponent } from './valo-posts.component';

describe('ValoPostsComponent', () => {
  let component: ValoPostsComponent;
  let fixture: ComponentFixture<ValoPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
