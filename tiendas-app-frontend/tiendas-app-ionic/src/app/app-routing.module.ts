import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'commerce-products',
    loadChildren: () => import('./pages/commerce-products/commerce-products.module').then( m => m.CommerceProductsPageModule)
  },
  {
    path: 'commerce-product-detail/:index',
    loadChildren: () => import('./pages/commerce-product-detail/commerce-product-detail.module').then( m => m.CommerceProductDetailPageModule)
  },
  {
    path: 'commerce-product-creation',
    loadChildren: () => import('./pages/commerce-product-creation/commerce-product-creation.module').then( m => m.CommerceProductCreationPageModule)
  },
  {
    path: 'commerce-list',
    loadChildren: () => import('./pages/commerce-list/commerce-list.module').then( m => m.CommerceListPageModule)
  },
  {
    path: 'commerce-detail',
    loadChildren: () => import('./pages/commerce-detail/commerce-detail.module').then( m => m.CommerceDetailPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./pages/products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
