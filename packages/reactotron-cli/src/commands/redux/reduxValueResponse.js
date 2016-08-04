import RS from 'ramdasauce'

const COMMAND = 'state.values.response'

/**
 Receives some values inside redux.
 */
const process = (context, action) => {
  const {path, value} = action.payload
  const time = context.timeStamp()
  if (RS.isNilOrEmpty(path)) {
    context.ui.logBox.log(`{white-fg}${time}{/} {blue-fg}values in{/} {cyan-fg}/{/}`)
  } else {
    context.ui.logBox.log(`{white-fg}${time}{/} {blue-fg}values in{/} {cyan-fg}${path}{/}`)
  }
  context.ui.logBox.log(value)
  context.ui.logBox.log('')
  context.ui.screen.render()
}

export default {
  name: COMMAND,
  process
}
