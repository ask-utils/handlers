import { RequestHandler, HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model';
import  Resolver, { interfaces } from 'class-resolver'
import { isLaunchRequest } from 'ask-utils';
import { Request, RequestEnvelope } from 'ask-sdk-model'

export interface TMergeTargetHandler<Input = HandlerInput, Output = Response> {
  canHandle?: (input: Input) => Promise<boolean> | boolean;
  handle?: (input: Input) => Promise<Output> | Output;
}
export interface TRequestHandler<Input = HandlerInput, Output = Response> {
  canHandle: (input: Input) => Promise<boolean> | boolean;
  handle: (input: Input) => Promise<Output> | Output;
}
export interface CustomeRequestEnvelope<CustomRequest extends Request> extends RequestEnvelope {
  request: CustomRequest
}
export interface CustomHandlerInput<CustomRequest extends Request = Request> extends HandlerInput {
  requestEnvelope : CustomeRequestEnvelope<CustomRequest>
}
export interface RequestHandlerBuilder<Input = CustomHandlerInput> extends interfaces.ResolveTarget {
  handle(handler: TMergeTargetHandler): TRequestHandler<Input>
}

const merge = (handler: TMergeTargetHandler, target?: TMergeTargetHandler): TRequestHandler => {
  const fallBackHandler: RequestHandler = {
    canHandle() {
      return true
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder.getResponse()
    }
  }  
  return Object.assign({}, fallBackHandler, target, handler)
}

export default class RequestHandlerFactory {
  public static create(type: string, handler: TMergeTargetHandler): TRequestHandler {
    return new Resolver(
      new LaunchRequestHandlerFactory(),
      new FallbackIntentFactory()
    ).resolve(type).handle(handler)
  }
}


export class LaunchRequestHandlerFactory implements RequestHandlerBuilder {
  supports(type: string) {
    return type === 'LaunchRequest'
  }
  handle(handler: TMergeTargetHandler) {
    return merge(handler, {
      canHandle(handlerInput) {
        return isLaunchRequest(handlerInput)
      }
    })
  }
}

export class FallbackIntentFactory implements RequestHandlerBuilder {
  supports() {
    return true
  }
  handle(handler: TMergeTargetHandler) {
    return merge(handler)
  }
}