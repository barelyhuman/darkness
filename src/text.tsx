import { Box, Mods } from './box'

type Props = Mods & {
  as: 'p' | 'span' | 'strong' | 'em'
}

export function Text({ as = 'p', ...props }: Props) {
  return <Box as={as} {...props} />
}
