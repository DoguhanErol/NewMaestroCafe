import * as React from "react"
import diff1 from './../../../assets/diff1.webp'
import diff2 from './../../../assets/diff2.webp'

const DiffImages:React.FC = () => {
  return (
    <>
        <section className="diff aspect-[16/9] max-h-[32rem] shadow-xl rounded-md">
          <figcaption className="diff-item-1">
            <img alt="Diff Image 1" src={diff1} />
          </figcaption>
          <figcaption className="diff-item-2">
            <img alt="Diff Image 2" src={diff2} />
          </figcaption>
        </section>
    </>
  )
}

export default DiffImages