import express from 'express'
import { fetchData } from './api.js'

const app = express()
const port = 3000

app.use(express.static('src/page'))

app.get('/api/impeachment-data', async (req, res) => {
  try {
    const agreeCount = await fetchData()
    res.json({ totalCount: agreeCount })
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})