import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { IntroPage } from '../pages/intro/intro';
import { FilmesTabsPage } from '../pages/tabs/filmes-tabs';
import { ConfigProvider } from '../providers/config/config';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      let config = configProvider.getConfigData();
      if (config == null) {
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      } else {
        this.rootPage = FilmesTabsPage;
      }
      console.log(config);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
