import * as React from "react";
import { render } from "react-dom";
import ApplicationContext from "./ApplicationContext";

export default function startBase(
    domRootId: string,
    appContext: ApplicationContext,
    app: React.ComponentClass,
): void {//testerror
    render(
        React.createElement(app),
        document.getElementById(domRootId));
}