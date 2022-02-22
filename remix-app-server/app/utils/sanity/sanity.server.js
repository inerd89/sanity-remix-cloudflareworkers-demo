const Sanity = require('@sanity/client')
import { config } from "./sanity.config"

// Standard client for fetching data
export const sanityClient = Sanity(config)
