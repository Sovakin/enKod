import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TileViewComponent } from './components/tile-view/tile-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

@NgModule({
	declarations: [
		AppComponent,
		TileViewComponent,
		ListViewComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }