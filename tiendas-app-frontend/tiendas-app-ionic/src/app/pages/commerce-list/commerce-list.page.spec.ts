import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceListPage } from './commerce-list.page';

describe('CommerceListPage', () => {
  let component: CommerceListPage;
  let fixture: ComponentFixture<CommerceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
