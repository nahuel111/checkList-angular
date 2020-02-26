import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './cicloVidaComponent-voidMemoryLeak/first/first.component';
import { ProyeccionesSlotComponent } from './proyecciones-slot/proyecciones-slot.component';
import { UsersComponent } from './templatesOutlet-viewChild-contentChild/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProyeccionesSlotComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
