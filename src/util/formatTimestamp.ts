export function formatTimestamp(timestamp: string): string {
  const datetimeObj = new Date(timestamp)

  const currentDatetime = new Date()

  const timeDifference = currentDatetime.getTime() - datetimeObj.getTime()

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  const formattedTimestamp = `(${daysAgo === 0 ? '오늘' : `${daysAgo}일 전`})`

  return formattedTimestamp
}
