import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceProductsPage } from './commerce-products.page';

describe('CommerceProductsPage', () => {
  let component: CommerceProductsPage;
  let fixture: ComponentFixture<CommerceProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
