import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnsPage } from './uns.page';

describe('UnsPage', () => {
  let component: UnsPage;
  let fixture: ComponentFixture<UnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
