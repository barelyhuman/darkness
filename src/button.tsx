import { Box, Mods } from './box'

type Props = Mods & {
  onClick?: () => void
} & Record<string, unknown>

export function Button({ ...props }: Props) {
  return <Box as="button" {...props} />
}
