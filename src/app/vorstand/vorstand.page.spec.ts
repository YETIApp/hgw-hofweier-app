import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VorstandPage } from './vorstand.page';

describe('VorstandPage', () => {
  let component: VorstandPage;
  let fixture: ComponentFixture<VorstandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VorstandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VorstandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
