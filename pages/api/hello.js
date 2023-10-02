// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const start = new Date()
  const { delay = '0' } = req.query

  const numDelay = parseInt(delay)

  console.log(numDelay)

  setTimeout(() => {
    const end = new Date()
    return res.json({ 
      result: 'hello',
      delay,
      start,
      end
    })
  }, numDelay * 1000)
}
