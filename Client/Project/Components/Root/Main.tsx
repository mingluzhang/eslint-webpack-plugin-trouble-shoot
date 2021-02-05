import * as React from "react";

interface AppState {
    currentFocusId: string;
}

export default class Main extends React.Component<{}, AppState> {//testerror
    doRender(): JSX.Element {
        return (<div></div>);
    }
}
