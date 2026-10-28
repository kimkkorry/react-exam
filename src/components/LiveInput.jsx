import { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="텍스트를 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력값: {text}</p>
    </div>
  );
}

export default LiveInput;
