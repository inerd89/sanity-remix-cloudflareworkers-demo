// import PicoSanity from 'picosanity'
import PicoSanity from 'picosanity/lib/browser'
import { config } from "./sanity.config"

// Standard client for fetching data
export const sanityClient = new PicoSanity(config)
