import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceProductCreatePage } from './commerce-product-create.page';

describe('CommerceProductCreatePage', () => {
  let component: CommerceProductCreatePage;
  let fixture: ComponentFixture<CommerceProductCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceProductCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceProductCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
