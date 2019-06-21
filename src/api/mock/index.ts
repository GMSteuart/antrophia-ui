const fetch = (mockData: JSON, time: number = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

// TODO: refactor mock client

export default {
  endpoint: `https://api.antrophia.lndo.site`
}
