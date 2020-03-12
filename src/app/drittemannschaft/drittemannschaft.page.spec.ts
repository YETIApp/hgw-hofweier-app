import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrittemannschaftPage } from './drittemannschaft.page';

describe('DrittemannschaftPage', () => {
  let component: DrittemannschaftPage;
  let fixture: ComponentFixture<DrittemannschaftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrittemannschaftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrittemannschaftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
