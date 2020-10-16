import { Reporter } from "gatsby"

export const CODES = {
  Generic: `12101`,
  CollectionGraphQL: `12102`,
  CollectionBuilder: `12103`,
  GeneratePath: `12104`,
  CollectionPath: `12105`,
  GraphQLResolver: `12106`,
  RequiredPath: `12107`,
  NonExistingPath: `12108`,
}

export const pluginPrefix = `gatsby-plugin-page-creator`

export function prefixId(id: string, reporter: Reporter): string {
  return reporter.setErrorMap ? id : `${pluginPrefix}_${id}`
}

// TODO: Refactor to use contextual data instead of only context.sourceMessage
// once reporter.setErrorMap is guaranteed to be available
export const ERROR_MAP = {
  [CODES.Generic]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
  },
  [CODES.CollectionGraphQL]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
  [CODES.CollectionBuilder]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
  [CODES.GeneratePath]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
  [CODES.CollectionPath]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
  [CODES.GraphQLResolver]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
  },
  [CODES.RequiredPath]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
  [CODES.NonExistingPath]: {
    text: (context): string => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
  },
} as Reporter["errorMap"]