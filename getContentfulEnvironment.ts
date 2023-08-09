const { loadEnvConfig } = require('@next/env')
const { strict: assert } = require("assert")
const contentfulManagement = require("contentful-management")
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const { CONTENTFUL_MANAGEMENT_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENV_ID } = process.env

assert(CONTENTFUL_MANAGEMENT_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENV_ID)

const getContentfulEnvironment = () => {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: CONTENTFUL_MANAGEMENT_TOKEN!,
    })

    return contentfulClient
        .getSpace(CONTENTFUL_SPACE_ID!)
        .then((space: any) => space.getEnvironment(CONTENTFUL_ENV_ID!))
}

module.exports = getContentfulEnvironment