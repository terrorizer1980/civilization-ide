import Vue from "vue";
import { windowClassOf } from "./vue-window-registry";

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

export default class VueWindowPool {
    public create(el: Element, type: string): Vue {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const options: any = {
            el,
            components: {}
        };
        options.template = `<${type}-window/>`;
        options.components[`${capitalize(type)}Window`] = windowClassOf(type);
        return new Vue(options);
    }
}
