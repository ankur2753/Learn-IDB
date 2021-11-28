import {Flex} from "@chakra-ui/react";
import {Component, React} from "react";
import {getContainerNames, getListContent, getListOfShips} from "./idb";


export class DataBaseVisualization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: null,
        }
    }

    /*
    object ={
                    shipName
                    shipVersion
                    shipContainers:{
                                container1:{}
                                container2:[{name,address,phone},{name,address,phone}]
                                 }
                    }
}*/
    async componentDidMount() {
        let x = await this.recursivelyLookInside();
        this.setState({ships: x})

    }

    async recursivelyLookInside() {
        let realData = [];
        let listOfShips = await getListOfShips();
        listOfShips.forEach(
            ship => {
                //create a new ship
                realData.push({shipName: ship.name, shipVersion: ship.version})
            }
        )
        realData.forEach(
            shipObj => {
                getContainerNames(shipObj.shipName).then(
                    res => {
                        //load containers to respective ships
                        shipObj['shipContainers'] = {}
                        res.map(
                            //finaly add items to the same ship inside the container
                            containerName => getListContent(shipObj.shipName, containerName).then(
                                data => shipObj.shipContainers[containerName] = {...data}
                            )
                        )
                    }
                )
            }
        )
        return realData;
    }

    render() {
        return (
            <Flex direction={"column"} m={10}>
                {this.state.ships != null ? this.state.ships.map(shipObj =>
                    (<details key={shipObj.shipName}>
                            <summary> ShipName: <span><u>{shipObj.shipName}</u>  </span>
                                <sub>version: {shipObj.shipVersion}</sub>
                            </summary>

                        </details>
                    )
                ) : <h3>loading data...</h3>}

            </Flex>
        );
    }
}