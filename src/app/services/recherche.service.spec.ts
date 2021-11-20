import { TestBed } from '@angular/core/testing';
import { RechercheService } from './rechercheService.service';



describe('RechercheServiceService', () => {
  let serviceRecherche: RechercheService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceRecherche = TestBed.inject(RechercheService);
  });

  it('should be created', () => {
    expect(serviceRecherche).toBeTruthy();
  });
});
