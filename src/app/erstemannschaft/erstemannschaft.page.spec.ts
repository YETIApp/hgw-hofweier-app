import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErstemannschaftPage } from './erstemannschaft.page';

describe('ErstemannschaftPage', () => {
  let component: ErstemannschaftPage;
  let fixture: ComponentFixture<ErstemannschaftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErstemannschaftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErstemannschaftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
