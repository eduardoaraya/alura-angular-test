import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  const prefix = 'app';

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generated id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix(prefix);
    expect(id.startsWith(`${prefix}-`)).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    const numbersOfIds = 50;
    for (let x = 1; x <= numbersOfIds; x++) {
      ids.add(service.generateUniqueIdWithPrefix(prefix));
    }
    expect(ids.size).toBe(numbersOfIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneredUniqueIds.name}
    should return the numbers of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);
    expect(service.getNumberOfGeneredUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
    ['', '1', '0'].forEach((value) =>
      expect(() => service.generateUniqueIdWithPrefix(value)).toThrow()
    );
  });
});
