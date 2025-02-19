import express from "express"
import integrationSettings from "./integration.js"
import axios from "axios"


const api = "8cf26396-a8c8-4762-8d3c-816d5e43de53"	
const url = 'https://pro-api.coingecko.com/api/v3/coins/top_gainers_losers'
const app = express()
const port = 3000

async function main(res) {
  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?market_cap_min=1000000000", {
      headers: {"X-CMC_PRO_API_KEY": api}
    })
    const result = response.data
    res.send(result)
  } catch (err) {
    console.log(err.message)
  }
}

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {"X-CMC_PRO_API_KEY": api}
    })
    const result = response.data.data
    let filtered = []
    for await (let coin of result) {
      if (coin.platform && coin.platform.name === "Solana")
        if (coin.quote["USD"].volume_24h > 1000000) {
          filtered.push(coin)
        }
    }
    res.send(filtered)
  } catch (err) {
    console.log(err.message)
    res.sendStatus(404)
  }
})


app.get("/integration.json", (req, res) => {
  // const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.json(integrationSettings)
})

app.post("/tick", (req, res) => {
  res.send("Started")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
