// --- angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// --- pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventCreatePageComponent } from './pages/event-create-page/event-create-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EventEditPageComponent } from './pages/event-edit-page/event-edit-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import { BarDetailsPageComponent } from './pages/bar-details-page/bar-details-page.component';
import { BarEditPageComponent } from './pages/bar-edit-page/bar-edit-page.component';
import { StyleguidePageComponent } from './pages/styleguide-page/styleguide-page.component';


// --- components
import { EventFormComponent } from './components/event-form/event-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BarCardComponent } from './components/bar-card/bar-card.component';
import { BarInfoCardComponent } from './components/bar-info-card/bar-info-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';


// --- guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';


// --- services
import { EventService } from './services/event.service';
import { BarService } from './services/bar.service';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',  canActivate: [ InitAuthGuardService ] },
  { path: 'home',  component: HomePageComponent,  canActivate: [ InitAuthGuardService ] },
  { path: 'events',  component: EventsListPageComponent,  canActivate: [ InitAuthGuardService ] },
  { path: 'signup',  component: SignupPageComponent,  canActivate: [ RequireAnonGuardService ] },
  { path: 'login',  component: LoginPageComponent,  canActivate: [ RequireAnonGuardService ] },
  { path: 'profile',  component: BarDetailsPageComponent,  canActivate: [ RequireUserGuardService ] },
  { path: 'profile/:id/edit', component: BarEditPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'events/:id', component: EventDetailsPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'events/:id/edit', component: EventEditPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'create',  component: EventCreatePageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'styleguide',  component: StyleguidePageComponent, canActivate: [ InitAuthGuardService ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventFormComponent,
    BarCardComponent,
    EventCardComponent,
    EventCreatePageComponent,
    StyleguidePageComponent,
    SignupPageComponent,
    LoginPageComponent,
    EventEditPageComponent,
    EventDetailsPageComponent,
    BarDetailsPageComponent,
    SearchFormComponent,
    EventListComponent,
    EventsListPageComponent,
    EventCardComponent,
    BarEditPageComponent,
    BarInfoCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    EventService,
    BarService,
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
