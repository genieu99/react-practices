import React, {Component} from "react";
import GroceryItem from "../02/GroceryItem";

class GroceryList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol className="grocery-list">
                {this.props.groceries.map(e =>
                    <GroceryItem key={e.no} name={e.name} count={e.count} />
                )}
            </ol>
        );
    }
}