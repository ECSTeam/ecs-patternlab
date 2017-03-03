import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternLabComponent } from './patternlab/patternlab.component';

const routes: Routes = [
  { path: 'patterns', component: PatternListComponent },
  { path: 'getting-started', component: PatternLabComponent },
  { path: '',
    redirectTo: '/getting-started',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
