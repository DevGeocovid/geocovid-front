function formatNumber(number:number): number |string{
  if (number < 10) {
    return `0${number}`
  }
  return number
}

export function formatDateTime(date:string):string {
  const d = new Date(date)
  const day = `${formatNumber(d.getDate())}/${formatNumber(
    d.getMonth() + 1
  )}/${d.getFullYear()}`
  const hour = `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`

  return `${day} - ${hour}`
}
