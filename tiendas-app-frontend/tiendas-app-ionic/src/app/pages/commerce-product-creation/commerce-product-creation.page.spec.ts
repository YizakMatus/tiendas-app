import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommerceProductCreationPage } from './commerce-product-creation.page';

describe('CommerceProductCreationPage', () => {
  let component: CommerceProductCreationPage;
  let fixture: ComponentFixture<CommerceProductCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceProductCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceProductCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
