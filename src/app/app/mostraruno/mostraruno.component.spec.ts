import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarunoComponent } from './mostraruno.component';

describe('MostrarunoComponent', () => {
  let component: MostrarunoComponent;
  let fixture: ComponentFixture<MostrarunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
