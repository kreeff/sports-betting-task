import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from '../app/preview/preview.component';
import { EditComponent } from '../app/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
