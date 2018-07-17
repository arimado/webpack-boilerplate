import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}> niceaaac asdasd </button>
            </div>
        )
    }
}