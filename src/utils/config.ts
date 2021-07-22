import configJson from '../config.json'

export interface PublicConfig {
  marvelApiPublicKey: string
}

let currentConfig: PublicConfig

export function config(): PublicConfig {
  if (currentConfig) {
    return currentConfig
  }

  const existsConfigJson = configJson

  if (!existsConfigJson) {
    throw new Error('Config file is missing!')
  }

  currentConfig = configJson

  return currentConfig
}
