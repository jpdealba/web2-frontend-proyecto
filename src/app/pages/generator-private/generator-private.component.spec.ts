import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPrivateComponent } from './generator-private.component';

describe('GeneratorPrivateComponent', () => {
  let component: GeneratorPrivateComponent;
  let fixture: ComponentFixture<GeneratorPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratorPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
