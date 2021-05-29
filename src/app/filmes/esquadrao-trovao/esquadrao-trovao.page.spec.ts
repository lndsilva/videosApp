import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquadraoTrovaoPage } from './esquadrao-trovao.page';

describe('EsquadraoTrovaoPage', () => {
  let component: EsquadraoTrovaoPage;
  let fixture: ComponentFixture<EsquadraoTrovaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquadraoTrovaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquadraoTrovaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
