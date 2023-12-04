import React from "react";
import { Text } from "react-native";

export class Table extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isBig: false
        }
    }

    changeSizeState = () => {
        this.setState({isBig: !this.state.isBig})
    }

    render() {
        return <Text style={{ fontSize: this.state.isBig ? 24 : 14}} onPress={this.changeSizeState}>Table Class Component</Text>
    }
}