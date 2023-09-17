import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdditionPageComponent } from './addition-page/addition-page.component';






const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  {
    path: 'portfolio', component: PortfolioComponent, title: 'portfolio',
    children:
      [
        { path: 'AdditionPage', component: AdditionPageComponent }
      ]
  },
  { path: 'firstTask', component: FirstTaskComponent, title: 'home' },
  { path: 'AdditionPage', component: AdditionPageComponent },
  { path: '**', component: NotfoundComponent, title: 'notfound' }

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
