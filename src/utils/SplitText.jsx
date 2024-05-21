import React from 'react'

const SplitText = () => {
    return text.split('\n').map((line, index) => (
        <div key={index} style={{ overflow: "hidden" }}>
          {line}
        </div>
      ));
}

export default SplitText