import { of } from 'rxjs';
import { ApiServiceService } from './api-service.service';

describe('Test de API Services', () => {
  let httpClientSpy : { get : jasmine.Spy } // creaciónd de mi espia con jasmine
  let service: ApiServiceService;

  beforeEach(() => {
     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']); // instanciamos el objeto
     service = new ApiServiceService(httpClientSpy as any);
  });

  it('Debe devolver datos de usuario', () => {
    // definimos el mock para realizar la prueba
    const expectUser = [
      { id : 1, name: 'A'},
      { id : 2, name: 'B'}
    ]

    httpClientSpy.get.and.returnValue(of(expectUser));

    service.getUsers().subscribe(value => {
      expect(JSON.stringify(value)).toBe(JSON.stringify(expectUser));
    });


  });
});
