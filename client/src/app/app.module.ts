import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InviteComponent } from './invite/invite.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MolDragdropComponent } from './molecules/mol-dragdrop/mol-dragdrop.component';
import { MolCommentComponent } from './molecules/mol-comment/mol-comment.component';
import { MolAccordionComponent } from './molecules/mol-accordion/mol-accordion.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    InviteComponent,
    MolDragdropComponent,
    MolCommentComponent,
    MolAccordionComponent,
    RoomsComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
