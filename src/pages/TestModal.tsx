import { FC } from 'react'
// import ConfirmDelete from '../components/Modals/ConfirmDelete'
import CreateDocument from '../components/Modals/CreateDocument'
import InfoPanel from '../components/Modals/InfoPanel'
import ToastExample from '../components/Toasts/SuccessToast'


const TestModal: FC = () => {
    return (
        <div>
            <div>
                PUSH THE BUTTON TO OPEN **CONFIRM DELETE** MODAL:
            </div>
            <div>
                {/* <ConfirmDelete /> */}
                <ToastExample />
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