import chalk from 'chalk'
const statusMessage = {
  200: 'Done',
  201: 'Created',
  400: 'Invalid format',
  500: 'Internal Error'
}

const success = (req, res, message, status = 200) =>
  res.status(status).send({
    error: '',
    body: message || statusMessage[status]
  })

const error = (req, res, message, status = 500, details) => {
  console.error(chalk.red('[response error]', details))
  res.status(status).send({
    error: message || statusMessage[status],
    body: ''
  })
}

export default {
  success,
  error
}
