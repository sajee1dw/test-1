import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { IdeaComponent } from './idea/idea.component';
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
     
    {
        path: '',
        component: HomeComponent
    },

     {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserprofileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'idea', component: IdeaComponent,canActivate:[AuthGuard]
    },
     {
         path: '', redirectTo: '/login', pathMatch: 'full'
     }
];


