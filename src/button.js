import { Box } from './box'

export function Button({ ...props }) {
  return <Box as="button" {...props} />
}
