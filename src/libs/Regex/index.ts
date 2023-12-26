export class RegExpChecker {
  private static createChecker(spec: RegExp, flag = "g"): RegExp {
    return new RegExp(spec, flag);
  }

  public static check(str: string, spec: RegExp): boolean {
    const regex: RegExp = RegExpChecker.createChecker(spec);
    return regex.test(str);
  }

  public static checkInsensitive(str: string, spec: RegExp): boolean {
    const regex: RegExp = RegExpChecker.createChecker(spec, "i");
    return regex.test(str);
  }
}
