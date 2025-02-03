import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeContentComponent } from './equipe-content.component';

describe('EquipeContentComponent', () => {
  let component: EquipeContentComponent;
  let fixture: ComponentFixture<EquipeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
