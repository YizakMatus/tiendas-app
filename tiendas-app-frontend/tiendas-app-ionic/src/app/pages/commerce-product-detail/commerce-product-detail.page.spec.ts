import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceProductDetailPage } from './commerce-product-detail.page';

describe('CommerceProductDetailPage', () => {
  let component: CommerceProductDetailPage;
  let fixture: ComponentFixture<CommerceProductDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceProductDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
