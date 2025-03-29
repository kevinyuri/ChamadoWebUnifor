import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoResolverComponent } from './chamado-resolver.component';

describe('ChamadoResolverComponent', () => {
  let component: ChamadoResolverComponent;
  let fixture: ComponentFixture<ChamadoResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadoResolverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChamadoResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
