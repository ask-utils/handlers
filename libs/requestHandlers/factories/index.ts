import HandlerBuilder from './Base'
import IntentHandlerBuilder from './Intent'
export * from './Base'
export * from './Intent'

export class IntentHandlerFactory {
    public static init (intentName?: string): IntentHandlerBuilder {
        if (!intentName) throw new Error('intentName is required')
        return new IntentHandlerBuilder(intentName)
    }
}

export class HandlerFactory {
    public static init (type: string, intentName?: string): HandlerBuilder {
        if (type === 'IntentRequest') {
            return IntentHandlerFactory.init(intentName)
        }
        return new HandlerBuilder()
    }
}
