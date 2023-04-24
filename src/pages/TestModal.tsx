import { FC } from 'react'
import ConfirmDelete from '../Modals/ConfirmDelete'
import CreateDocument from '../Modals/CreateDocument'
import InfoPanel from '../Modals/InfoPanel'


const TestModal: FC = () => {
    return (
        <div>
            <div>
                PUSH THE BUTTON TO OPEN **CONFIRM DELETE** MODAL:
            </div>
            <div>
                <ConfirmDelete />
            </div>
            <hr />
            <hr />
            <hr />
            <div>
                PUSH THE BUTTON TO OPEN **CREATE** MODAL:
            </div>
            <div>
                <CreateDocument />
            </div>
            <hr />
            <hr />
            <hr />
            <div>
                PUSH THE BUTTON TO OPEN **INFO** MODAL:
            </div>
            <div>
                <InfoPanel />
            </div>
            <hr />
            <hr />
            <hr />
            <div>
                PUSH THE BUTTON TO OPEN **EDIT** MODAL:
            </div>
            <div>
                ?????
            </div>
        </div>
    )
}

export default TestModal