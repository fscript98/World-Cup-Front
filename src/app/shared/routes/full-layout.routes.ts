import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'world-cup',
    loadChildren: () => import('../../page/world-cup.module').then(m => m.WorldCupModule)
  }
];
