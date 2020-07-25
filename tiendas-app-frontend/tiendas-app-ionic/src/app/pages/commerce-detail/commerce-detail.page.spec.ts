import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceDetailPage } from './commerce-detail.page';

describe('CommerceDetailPage', () => {
  let component: CommerceDetailPage;
  let fixture: ComponentFixture<CommerceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
