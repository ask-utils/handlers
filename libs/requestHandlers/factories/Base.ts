import { RequestHandler } from 'ask-sdk-core'

import {
  CanHandle, Handle, IHandlerBuilder
} from './model'
export class HandlerBuilder implements IHandlerBuilder {
  protected canHandleFilter: CanHandle = () => true
  public canHandle: CanHandle = (handlerInput) => {
    return this.canHandleFilter(handlerInput)
  }
  public handle: Handle = (handlerInput) => {
    throw new Error(`Unsupported request: ${JSON.stringify(handlerInput)}`, )
  }
  public setHandleCondition(condition: CanHandle): this {
    this.canHandleFilter = condition
    return this
  }
  public setHandle(handle: Handle): this {
    this.handle = handle
    return this
  }
  public updateHandler(condition: CanHandle, handle: Handle): this {
    this.setHandle(handle)
    this.setHandleCondition(condition)
    return this
  }
  public replaceHandler(handler: Partial<RequestHandler>): this {
    if (handler.canHandle) this.setHandleCondition(handler.canHandle)
    if (handler.handle) this.setHandle(handler.handle)
    return this
  }
  public getHandler(): RequestHandler {
    return {
      canHandle: this.canHandle,
      handle: this.handle
    }
  }
}
export class HandlerFactory {
  public static init() {
    const builder = new HandlerBuilder()
    return builder
  }
}
export default HandlerFactory