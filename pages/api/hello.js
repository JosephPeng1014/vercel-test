// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { delay = '0' } = req.query

  const numDelay = parseInt(delay)

  console.log(numDelay)

  setTimeout(() => {
    return res.json({ result: 'hello' })
  }, numDelay * 1000)
}
