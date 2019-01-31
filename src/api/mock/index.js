const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

// TODO: refactor mock client

export default {
  endpoint: `https://api.antrophia.lndo.site`,
}