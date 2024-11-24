import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeTableComponent } from './cake-table.component';

describe('CakeTableComponent', () => {
  let component: CakeTableComponent;
  let fixture: ComponentFixture<CakeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
