import React from "react";
import Table from "./Table";
import Item from "./Item";


class App extends React.Component {

    render() {

        return (
            Table.filter(x => x.isActive).map(item =>
    <Item
        id={item.id}
        title={item.title}
        isActive={item.isActive}
        img={item.img}
        description={item.description}
        date={item.date}
        tags={item.tags}

    />
    ))


    }
}
export default App;
