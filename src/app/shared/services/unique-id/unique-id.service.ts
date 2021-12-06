import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public getNumberOfGeneredUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
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
