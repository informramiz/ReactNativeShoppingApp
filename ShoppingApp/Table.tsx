import React from "react";
import { Text } from "react-native";

export class Table extends React.PureComponent<{}, {isBig: boolean}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isBig: false
        }
    }

    changeSizeState () {
        this.setState({isBig: !this.state.isBig})
    }

    render() {
        return <Text style={{ fontSize: this.state.isBig ? 24 : 14}} onPress={this.changeSizeState.bind(this)}>Table Class Component</Text>
    }
}