const sortObj = (val, splitDate) => {
  let res = []
  if (splitDate === false) {
    // 날짜별로 모든 메시지들을 배열에 담고 빠른 날짜 순으로 소트 진행
    for (let [key, value] of Object.entries(val)) {
      res.push({ date: key, value })
    }
    res.sort((a,b) => {
      let keyA = new Date(a.date)
      let keyB = new Date(b.date)
      if (keyA < keyB) return -1
      if (keyA > keyB) return 1
      return 0
    })
  } else {
    // 해당 날짜의 모든 메시지를 초 단위, id 순으로 소트 진행
    res = val
    res.sort((a,b) => {
      let keyA = new Date(a.created_at)
      let keyB = new Date(b.created_at)
      if (keyA < keyB) return -1
      else if (keyA > keyB) return 1

      // created_at 이 같은 경우 id로 소트 진행
      else {
        let secondA = a.id
        let secondB = b.id
        if (secondA < secondB) return -1
        if (secondA > secondB) return 1
        return 0
      }
    })
  }

  return res
}

const scrollBottom = () => {
  let container = document.getElementById('chats')
  container.scrollTop = container.scrollHeight
}

export {
  sortObj,
  scrollBottom
}