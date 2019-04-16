import { HandlerInput, getRequestType } from 'ask-sdk-core'
import { SessionEndedRequest } from 'ask-sdk-model'
const SessionEndedRequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
  },
  handle(handlerInput: HandlerInput) {
    const request = handlerInput.requestEnvelope.request as SessionEndedRequest
    console.log(`Session ended with reason: ${request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

export default SessionEndedRequestHandler
