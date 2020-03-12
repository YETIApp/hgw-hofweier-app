import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'post-details/:postId',
    loadChildren: () => import('./post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'erstemannschaft',
    loadChildren: () => import('./erstemannschaft/erstemannschaft.module').then( m => m.ErstemannschaftPageModule)
  },
  {
    path: 'zweitemannschaft',
    loadChildren: () => import('./zweitemannschaft/zweitemannschaft.module').then( m => m.ZweitemannschaftPageModule)
  },
  {
    path: 'drittemannschaft',
    loadChildren: () => import('./drittemannschaft/drittemannschaft.module').then( m => m.DrittemannschaftPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
