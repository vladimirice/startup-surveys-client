/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactWrapper } from 'enzyme';
import { ComponentType } from 'react';

export class CommonChecker {
  public static expectComponentExist(wrapper: ReactWrapper, component: ComponentType): ReactWrapper {
    const componentWrapper = wrapper.find(component);

    expect(componentWrapper.length).toEqual(1);

    return componentWrapper;
  }

  public static expectComponentAbsence(wrapper: ReactWrapper, component: any): void {
    const componentWrapper = wrapper.find(component);

    expect(componentWrapper.length).toEqual(0);
  }
}
