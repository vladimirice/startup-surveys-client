/* eslint-disable @typescript-eslint/no-explicit-any */
export class CommonHelper {
  public static flushPromises(): any {
    return new Promise((resolve: any): any => setTimeout(resolve));
  }
}
