import { TestBed } from '@angular/core/testing';

import { TasksResolverService } from './tasks-resolver.service';

describe('TasksResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksResolverService = TestBed.get(TasksResolverService);
    expect(service).toBeTruthy();
  });
});
