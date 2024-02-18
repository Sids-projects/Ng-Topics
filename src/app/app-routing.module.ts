import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { FormsComponent } from './components/forms/forms.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { PatchSetComponent } from './components/patch-set/patch-set.component';
import { NgMaterialsComponent } from './components/ng-materials/ng-materials.component';
import { IframeComponent } from './components/iframe/iframe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ngFor', component: NgForComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tableFilter', component: TableFilterComponent },
  { path: 'patchSet', component: PatchSetComponent },
  { path: 'materials', component: NgMaterialsComponent },
  { path: 'iframe', component: IframeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
