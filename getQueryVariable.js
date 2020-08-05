// https://css-tricks.com/snippets/javascript/get-url-variables/
const getQueryVariable = parameter => {
  const query = window.location.search.substring(1)
  const vars = query.split("&")
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=")
    if (pair[0] === parameter) return pair[1]
  }
  return null
}
