import React from "react";
import {AnimatePresence} from "framer-motion";
import {Button, Flex} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {addShipContainers, appendtoList, createShip, getContainerNames, getListOfShips} from "./idb";
import {CreateNewSection, DataIn, SelectFromOptions} from "./InpForm";


export class CrudOperations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDataBase: null,
            currentObjectStore: null,
            listOfObjectStores: null,
            listOfDataBase: null,
            readyForNext: false,
            step: 0
        }
        this.enableNextButton = this.enableNextButton.bind(this);
        this.selectDataBase = this.selectDataBase.bind(this);
        this.selectObjectStore = this.selectObjectStore.bind(this);
        this.storeInputData = this.storeInputData.bind(this);
    }

    enableNextButton(boolean) {
        this.setState({readyForNext: boolean})
    }


    async componentDidMount() {
        let dblist = await getListOfShips();
        dblist = dblist.map(({name}) => name)
        this.setState({listOfDataBase: dblist})
    }

    async selectDataBase(DataBaseName) {
        let containerName = await getContainerNames(DataBaseName);
        this.setState({currentDataBase: DataBaseName, listOfObjectStores: containerName})
    }

    selectObjectStore(ObjectStoreName) {
        this.setState({currentObjectStore: ObjectStoreName});
    }

    createNewDataBase(dbName) {
        createShip(dbName);
    }

    createNewObjectStore(dbName, osName) {
        addShipContainers(dbName, osName);
    }

    storeInputData(dataObject) {
        appendtoList(this.state.currentDataBase, this.state.currentObjectStore, dataObject);
    }

    render() {

        return <Flex justifyContent="center" alignItems="center" bgGradient="linear(to-t, #373A34,#4286f4)" m={20}
                     flexDirection="column" maxWidth={"50vw"} maxW={"lg"}
                     borderRadius={15}>
            <AnimatePresence exitBeforeEnter>
                {(this.state.step === 1 && this.state.listOfDataBase != null) &&
                <SelectFromOptions what={"Database"} openPopUP={this.openPopUp}
                                   listOfOptions={this.state.listOfDataBase}
                                   onSubmitFunction={this.selectDataBase}
                                   next={this.enableNextButton}/>}
                {(this.state.step === 2 && this.state.listOfObjectStores != null) &&
                <SelectFromOptions what={"ObejctStore"} openPopUP={this.createNewObjectStore}
                                   listOfOptions={this.state.listOfObjectStores}
                                   onSubmitFunction={this.selectObjectStore}
                                   next={this.enableNextButton}/>}
                {(this.state.step === 3) &&
                <DataIn onSubmitFunction={this.storeInputData}/>
                }
                {(this.state.step === 0 && this.state.listOfDataBase != null) &&
                <CreateNewSection list_of_DataBase={this.state.listOfDataBase} createDB={this.createNewDataBase}
                                  createObjectStore={this.createNewObjectStore} next={this.enableNextButton}/>}

            </AnimatePresence>
            <Flex>

                <Button aria-label="previous" onClick={() => {
                    //render next element somehow
                    let {step} = this.state;
                    if (step > 0)
                        this.setState({step: --step});
                    this.enableNextButton(false)
                }} disabled={!(this.state.step > 0)}
                        colorScheme="green" rightIcon={<ChevronLeftIcon/>} m={2}>
                    Previous</Button>
                <Button aria-label="next" onClick={() => {
                    let {step} = this.state;
                    if (step < 3)
                        this.setState({step: ++step});
                    this.enableNextButton(false)
                }} disabled={!this.state.readyForNext}
                        colorScheme="green" rightIcon={<ChevronRightIcon/>} m={2}>
                    Next</Button>
            </Flex>
        </Flex>
    }
}