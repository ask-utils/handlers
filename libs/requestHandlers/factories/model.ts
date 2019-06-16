import { RequestHandler, HandlerInput } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export type CanHandle = (handlerInput: HandlerInput) => Promise<boolean> | boolean
export type Handle = (handlerInput: HandlerInput) => Promise<Response> | Response
export interface IHandlerBuilder {
  canHandle: CanHandle
  handle: Handle
  setHandleCondition(condition: CanHandle): IHandlerBuilder
  setHandle(handle: Handle): IHandlerBuilder
  updateHandler(condition: CanHandle, handle: Handle): IHandlerBuilder
  replaceHandler(handler: Partial<RequestHandler>): IHandlerBuilder
  getHandler(): RequestHandler
}