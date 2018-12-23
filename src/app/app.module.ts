import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import {HttpModule, BaseRequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesCompnent } from './courses.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostsComponent } from './HttpServices/posts/posts.component';
import { PostService } from './HttpServices/services/post.service';
import { AppErrorHandler } from './HttpServices/common/app-error-handler';
import { RouterModule} from '@angular/router';
import { NotFoundComponent } from './routing/notfound/notfound.component';
import { NavbarComponent } from './routing/navbar/navbar.component';
import { HomeComponent } from './routing/home/home.component';
import { ProfileComponent } from './routing/profile/profile.component';
import { AdminComponent } from './authntication/admin/admin.component';
import { LoginComponent } from './authntication/login/login.component';
import { NoAccessComponent } from './authntication/noaccess/noaccess.component';
import { OrderService } from './authntication/services/order.service';
import { AuthService } from './authntication/services/auth.service';
import { FakeBackendFactory, fakeBackendProvider } from './authntication/helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { NewHomeComponent } from './authntication/home/home.component';
import { AuthGuard } from './authntication/services/auth-guard.service';
import { AdminAuthGuard } from './authntication/services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesCompnent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormComponent,
    PostsComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    NewHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      { path: 'home/:userid', component: HomeComponent},
      { path: 'home/:userid/:name', component: HomeComponent},
      { path: 'reactiveform', component: ReactiveFormComponent},
      { path: 'posts', component: PostsComponent},

      { path: 'admin', component : AdminComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'login', component: LoginComponent},
      { path: 'no-access', component: NoAccessComponent},
      { path: 'authhome', component:NewHomeComponent},
      { path: '**', component : NotFoundComponent}
    ])
  ],
  providers: [CoursesService, PostService, {provide:ErrorHandler, useClass:AppErrorHandler}, 
    OrderService, 
    AuthService, 
    AuthGuard,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend, BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
