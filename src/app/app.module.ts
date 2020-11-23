import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManageprofileComponent } from './manageprofile/manageprofile.component';
import { UserhomedataComponent } from './userhomedata/userhomedata.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AdminhomedataComponent } from './adminhomedata/adminhomedata.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ManagecatComponent } from './managecat/managecat.component';
import { ManagesubcatComponent } from './managesubcat/managesubcat.component';
import { ShowsubcatComponent } from './showsubcat/showsubcat.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ShowadsComponent } from './showads/showads.component';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';
import { AddetailsComponent } from './addetails/addetails.component';
import { AdsComponent } from './ads/ads.component';
import { ManagepostComponent } from './managepost/managepost.component';
import { UseraddetailsComponent } from './useraddetails/useraddetails.component';
import { NotificationComponent } from './notification/notification.component';
import { FacebookComponent } from './facebook/facebook.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    AdminhomeComponent,
    ManageprofileComponent,
    UserhomedataComponent,
    ManageuserComponent,
    AdminhomedataComponent,
    ChangepasswordComponent,
    ManagecatComponent,
    ManagesubcatComponent,
    ShowsubcatComponent,
    AddpostComponent,
    ShowadsComponent,
    SuccessComponent,
    CancelComponent,
    AddetailsComponent,
    AdsComponent,
    ManagepostComponent,
    UseraddetailsComponent,
    NotificationComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'' , component:HomeComponent },
      { path:'home' , component:HomeComponent
    },
    {path:'showsubcat',component:ShowsubcatComponent},	
    {path:'showads',component:ShowadsComponent,
  
  },
  {
    path:'addetails',
    component:AddetailsComponent
  },
    {path:'success',component:SuccessComponent},
    {path:'cancel',component:CancelComponent},
      { path:'about' , component:AboutComponent },
      { path:'contact' , component:ContactComponent },
      { path:'service' , component:ServiceComponent },
      
      { path:'register' , component:RegisterComponent },
      { path:'login' , component:LoginComponent },
      {path:'social/:token/:email',component:FacebookComponent},
      
      { path:'users' , component:UserhomeComponent ,
      children:[
        {
          path:'',
          component:UserhomedataComponent
        },
        {
          path:'manageprofile',
          component:ManageprofileComponent
        },
        {
          path:'managepost',
          component:ManagepostComponent

        },
        {
          path:'useraddetails',
          component:UseraddetailsComponent

        },
        {
          path:'changepassword',
          component:ChangepasswordComponent

        },
        {
          path:'notification',
          component:NotificationComponent
        }
      ]
      
      
      },
      { path:'admin' ,component:AdminhomeComponent ,
      children:[
        {
          path:'',
          component:AdminhomedataComponent
        },
        {
          path:'manageuser',
          component:ManageuserComponent
        },

        {
          path:'managecat',
          component:ManagecatComponent
        },

        {
          path:'managesubcat',
          component:ManagesubcatComponent
        },


        {
          path:'changepassword',
          component:ChangepasswordComponent

        }
      ]
       },
       { path:'addpost' , component:AddpostComponent }
      //{ path:'**' , component:PnfComponent }  		
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
