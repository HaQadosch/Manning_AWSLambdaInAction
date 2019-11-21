console.log('Loading function')

exports.handler = ({ name = 'World', ...event }, context, callback) => {
  console.log('Received event', JSON.stringify(event, null, 2))
  console.log('Received context', JSON.stringify(context, null, 2))
  console.log({ event, context })
  const greetings = `Hello ${name}`
  console.log({ greetings })
  callback(null, greetings)
}
