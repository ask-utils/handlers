# Utility handlers for ASK-SDk (v2)

You can add general / utility handlers to use this package.

## Getting stated

```
$ npm install -S @ask-utils/handlers
```

## Handlers
### RequestHandlers

#### DeleteUserData

After subscribe `AlexaSkillEvent.SkillDisabled` event (`eventName: 'SKILL_DISABLED'`), you can delete a persistent attributes of the user who disabled your skill.

```typescript
import * as  Alexa from 'ask-sdk'
import { DeleteDisabledUserHandler } from '@ask-utils/handlers'

...
export const handler = Alexa..SkillBuilders.standard()
  .addRequestHandlers(
    ...,
    DeleteDisabledUserHandler
  )
  .lambda()
```

#### SessionEndedRequestHandler

Simple handler for `SessionEndedRequest`.

```typescript
import * as  Alexa from 'ask-sdk'
import { SessionEndedRequestHandler } from '@ask-utils/handlers'

...
export const handler = Alexa..SkillBuilders.standard()
  .addRequestHandlers(
    ...,
    SessionEndedRequestHandler
  )
  .lambda()
```

## RequestHandlerFactort (Beta)

You can easy to create a Alexa request handler

```typescript
import { RequestHandlerFactory } from '@ask-utils/handlers'

const LaunchRequestHandler = RequestHandlerFactory.create(
    'LaunchRequest',
    {
        handle (handlerInput) {
            return handlerInput.responseBuilder.speak('hello world').getResponse()
        }
    }
)
```