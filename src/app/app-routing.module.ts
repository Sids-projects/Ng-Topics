import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { PracticeComponent } from './components/practice/practice.component';
import { FormArrayComponent } from './materials/form-array/form-array.component';

const routes: Routes = [
  { path: 'parentChild', component: ParentChildComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'formArray', component: FormArrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
