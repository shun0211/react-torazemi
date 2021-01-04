import React, {useState, useEffect} from 'react';

// 関数名はファイル名と合わせる
const LikeButton = () => {
  const [count, counter] = useState(0)

  const countUp = () => {
      counter(count + 1)
  }

  useEffect(() => {
    document.getElementById('counter').addEventListener('click', countUp)
    if (count >= 10) {
        counter(0)
    }

    return () => {
      document.getElementById('counter').removeEventListener('click', countUp)
    }

  });

  return (
    <button id={"counter"}>いいね数：{count}</button>
  )
}

export default LikeButton
