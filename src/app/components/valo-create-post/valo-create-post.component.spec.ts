import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoCreatePostComponent } from './valo-create-post.component';

describe('ValoCreatePostComponent', () => {
  let component: ValoCreatePostComponent;
  let fixture: ComponentFixture<ValoCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
