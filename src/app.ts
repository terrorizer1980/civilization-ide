import "../assets/css/goldenlayout-base.css";
import "../assets/css/goldenlayout-light-theme.css";
import GoldenLayout, { Container } from "golden-layout";
import VueWindowPool from "./vue-window-pool";

const config = {
    settings: {
        showPopoutIcon: false
    },
    content: [
        {
            type: "row",
            content: [
                {
                    type: "component",
                    componentName: "vue-window",
                    title: "Resources",
                    componentState: { window: "resources" }
                },
                {
                    type: "column",
                    content: [
                        {
                            type: "component",
                            componentName: "vue-window",
                            title: "Operations",
                            componentState: { window: "operations" }
                        }, {
                            type: "component",
                            componentName: "vue-window",
                            title: "Log",
                            componentState: { window: "log" }
                        }
                    ]
                }
            ]
        }
    ]
};


const myLayout = new GoldenLayout(config);
const pool = new VueWindowPool();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
myLayout.registerComponent("vue-window", (container: Container, componentState: any) => {
    const el = container.getElement().get()[0];
    const div = document.createElement("div");
    el.appendChild(div);
    setTimeout(() => {
        const vue = pool.create(div, componentState.window);
        container.on("destroy", () => {
            vue.$destroy();
        });
    });
});

myLayout.init();
