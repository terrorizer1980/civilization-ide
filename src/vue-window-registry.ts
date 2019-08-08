import ResourcesWindow from "./components/ResourcesWindow.vue";
import OperationsWindow from "./components/OperationsWindow.vue";
import LogWindow from "./components/LogWindow.vue";

const registry = {
    resources: ResourcesWindow,
    operations: OperationsWindow,
    log: LogWindow
};

/* eslint-disable
   @typescript-eslint/promise-function-async,
   @typescript-eslint/no-explicit-any,
   @typescript-eslint/ban-ts-ignore
*/
// @ts-ignore
export const windowClassOf = (type: string): any => registry[type];
