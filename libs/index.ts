import _DeleteDisabledUserHandler from './requestHandlers/deleteUserData'
import _SessionEndedRequestHandler from './requestHandlers/sessionEndRequest'

export const DeleteDisabledUserHandler = _DeleteDisabledUserHandler
export const SessionEndedRequestHandler = _SessionEndedRequestHandler

export default {
    DeleteDisabledUserHandler,
    SessionEndedRequestHandler
}
