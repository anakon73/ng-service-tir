import { Provider } from '@angular/core'
import { WebRenderer, DecoratorFunction } from '@storybook/types'
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types'

interface NgModuleMetadata {
  declarations?: any[]
  entryComponents?: any[]
  imports?: any[]
  schemas?: any[]
  providers?: Provider[]
}

interface AngularRenderer extends WebRenderer {
  component: any
  storyResult: StoryFnAngularReturnType
}

export const moduleMetadata =
  <TArgs = any>(
    metadata: Partial<NgModuleMetadata>,
  ): DecoratorFunction<AngularRenderer, TArgs> =>
  (storyFn) => {
    const story = storyFn()
    const storyMetadata = story.moduleMetadata || {}
    metadata = metadata || {}

    return {
      ...story,
      moduleMetadata: {
        declarations: [
          ...(metadata.declarations || []),
          ...(storyMetadata.declarations || []),
        ],
        entryComponents: [
          ...(metadata.entryComponents || []),
          ...(storyMetadata.entryComponents || []),
        ],
        imports: [
          ...(metadata.imports || []),
          ...(storyMetadata.imports || []),
        ],
        schemas: [
          ...(metadata.schemas || []),
          ...(storyMetadata.schemas || []),
        ],
        providers: [
          ...(metadata.providers || []),
          ...(storyMetadata.providers || []),
        ],
      },
    }
  }
