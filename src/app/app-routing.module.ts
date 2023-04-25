import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeveloperComponent } from './developer/developer.component';
import { ChallengeOutputComponent } from './challenge-output/challenge-output.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignUpComponent},
  {path: "user-profile", component: UserProfileComponent},
  {path: "developers", component: DeveloperComponent},
  {path: "challenge-output", component: ChallengeOutputComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
