import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule, RouterTestingModule], // <====
      providers: [],
      declarations: [],});
    
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
