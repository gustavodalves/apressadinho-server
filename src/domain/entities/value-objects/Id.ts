import * as crypto from 'crypto';

export default class Id {
    private constructor(public readonly id: string) {}

    static create() {
        return new Id(
            crypto.randomUUID()
        );
    }

    static recover(id: string) { return new Id(id); }

    getValue() {
        return this.id;
    }
}
