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