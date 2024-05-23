import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalytics, AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { COMMON_CONFIG } from '../../test-config';
import { rando } from '../../utils';


describe('AngularFireAnalytics', () => {
  let analytics: AngularFireAnalytics;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(COMMON_CONFIG, rando()),
        AngularFireAnalyticsModule
      ]
    });

    analytics = TestBed.inject(AngularFireAnalytics);
  });

  it('should be exist', () => {
    expect(analytics instanceof AngularFireAnalytics).toBe(true);
  });

  it('should have the Firebase Functions instance', () => {
    expect(analytics.app).toBeDefined();
  });

});
