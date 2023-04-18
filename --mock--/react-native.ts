// __mocks__/react-native.ts
const ReactNative = jest.requireActual('react-native');

export const NativeModules = {
  ...ReactNative.NativeModules,
  YOUR_NATIVE_MODULE_NAME: {},
};
