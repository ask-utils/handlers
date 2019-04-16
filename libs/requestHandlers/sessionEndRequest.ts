import { HandlerInput, getRequestType, RequestHandler } from 'ask-sdk-core'
import { SessionEndedRequest, Response } from 'ask-sdk-model'
const SessionEndedRequestHandler: RequestHandler = {
    canHandle (handlerInput: HandlerInput): boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest'
    },
    handle (handlerInput: HandlerInput): Response {
        const request = handlerInput.requestEnvelope.request as SessionEndedRequest
        console.log(`Session ended with reason: ${request.reason}`)
        return handlerInput.responseBuilder.getResponse()
    }
}

export default SessionEndedRequestHandler
