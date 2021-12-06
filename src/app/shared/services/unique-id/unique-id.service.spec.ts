import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  it('#generateUniqueIdWithPrefix shoud generated id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
