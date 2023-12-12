import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ToolbarComponent]
})
export class ComponentsModule { }
