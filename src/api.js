import fetch from 'node-fetch'
import https from 'node:https'

const userAgent = 'Mozilla/5.0'

const agent = new https.Agent({
    rejectUnauthorized: false
  })

export const fetchData = async () => {
  try {
    const response = await fetch('https://open.assembly.go.kr/portal/data/sheet/downloadSheetData.do?rows=1&infId=O0JYV9001256KD10538&infSeq=1&downloadType=J&PETIT_SJ=탄핵소추안', { 
        headers: {
            'User-Agent': userAgent
        },
        agent
     })
    const data = await response.json()
    const agreeCount = data[1].AGRE_CO
    return agreeCount
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()