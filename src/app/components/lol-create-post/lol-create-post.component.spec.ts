import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolCreatePostComponent } from './lol-create-post.component';

describe('LolCreatePostComponent', () => {
  let component: LolCreatePostComponent;
  let fixture: ComponentFixture<LolCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LolCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
