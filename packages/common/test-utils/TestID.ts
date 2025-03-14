class TestID extends String {
  public key = (...args: string[]) => this.toString(...args);

  public toString = (...args: string[]) =>
    [super.toString(), ...args].join(".");
}

export const createTestId = (key: string) => new TestID(key);
