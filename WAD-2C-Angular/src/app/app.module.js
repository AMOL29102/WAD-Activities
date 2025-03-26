import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SignUpComponent } from './pages/signup/signup.component';
import { SignInComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, SignInComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // Register Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
