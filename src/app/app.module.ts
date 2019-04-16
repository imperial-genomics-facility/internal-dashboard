import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlotSeqrunBasesComponent } from './components/plot-seqrun-bases/plot-seqrun-bases.component';
import { PlotSeqrunCountComponent } from './components/plot-seqrun-count/plot-seqrun-count.component';
import { PlotStorageInfoComponent } from './components/plot-storage-info/plot-storage-info.component';
import { PlotSinglecellHistComponent } from './components/plot-singlecell-hist/plot-singlecell-hist.component';
import { SamplePoolingComponent } from './components/sample-pooling/sample-pooling.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlotSeqrunBasesComponent,
    PlotSeqrunCountComponent,
    PlotStorageInfoComponent,
    PlotSinglecellHistComponent,
    SamplePoolingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
