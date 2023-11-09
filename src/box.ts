import { h } from 'preact'
import { modsToStyle as flexMods } from 'flexery'
import { modsToStyle as spaceMods } from 'spacery'

export type Mods = {
  // padding mods
  paddingL?: boolean
  paddingT?: boolean
  paddingB?: boolean
  paddingR?: boolean
  paddingY?: boolean
  paddingX?: boolean

  // margin mods
  marginL?: boolean
  marginT?: boolean
  marginB?: boolean
  marginR?: boolean
  marginY?: boolean
  marginX?: boolean

  // flex mods
  flex?: boolean
  alignTop?: boolean
  alignBottom?: boolean
  alignCenter?: boolean
  alignStart?: boolean
  alignEnd?: boolean
  alignBaseline?: boolean
  justTop?: boolean
  justBottom?: boolean
  justCenter?: boolean
  justStart?: boolean
  justEnd?: boolean
  justBaseline?: boolean
  justBetween?: boolean
  justAround?: boolean
  justEvenly?: boolean
  justStretch?: boolean
  center?: boolean
  centerX?: boolean
  centerY?: boolean
}

type Props = Mods & {
  as?: string
  style?: object
  class?: string
  className?: string
} & Record<string, unknown>

export function Box({ as = 'div', ...props }: Props) {
  const { sanitizedProps, style: flexStyles } = flexMods(props)
  const { sanitizedProps: finalProps, style: spaceStyles } =
    spaceMods(sanitizedProps)

  return h(as, {
    style: {
      ...flexStyles,
      ...spaceStyles,
      ...props.style,
    },
    ...finalProps,
  })
}
