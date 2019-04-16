import { HandlerInput } from 'ask-sdk-core'
import { createAskSdkError } from 'ask-sdk-runtime'

const DeleteDisabledUserHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
      return handlerInput.requestEnvelope.request.type === 'AlexaSkillEvent.SkillDisabled'
  },
  async handle(handlerInput: HandlerInput): Promise<void> {
    const { deletePersistentAttributes } = handlerInput.attributesManager
    if (!deletePersistentAttributes) throw createAskSdkError('DeleteDisabledUserHandler', 'deletePersistentAttributes is not defined. Please upgrade your ask-sdk.')
    await deletePersistentAttributes()
  }
}
export default DeleteDisabledUserHandler