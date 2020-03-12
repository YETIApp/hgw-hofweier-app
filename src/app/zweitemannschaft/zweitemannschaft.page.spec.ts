import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZweitemannschaftPage } from './zweitemannschaft.page';

describe('ZweitemannschaftPage', () => {
  let component: ZweitemannschaftPage;
  let fixture: ComponentFixture<ZweitemannschaftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZweitemannschaftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZweitemannschaftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
