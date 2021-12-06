import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  private validPrefix = /^[A-Za-z]+[\w\-\:\.]]*$/;

  public getNumberOfGeneredUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!this.validPrefix.test(prefix)) {
      throw new Error(`Prefix can not be empty`);
    }
    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  private generatedUniqueId(): string {
    return uuidv4();
  }
}
