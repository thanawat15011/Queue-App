import React, { useEffect } from "react"

const Loading = (props) => {
  const { show } = props

  useEffect(() => {
    show ? _disableContent() : _ableContent()
  }, [])

  const _disableContent = () => document.getElementById('root').classList.add('disabled-content')
  const _ableContent = () => document.getElementById('root').classList.remove('disabled-content')

  return show &&
    <div className="modal fade loading show d-block" style={{ zIndex: 9000, }}>
      <div className="modal-dialog modal-dialog-centered">
        <svg viewBox="0 0 32 32" className="_loading w-100">
          <circle cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
            <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </circle>
        </svg>
      </div>
    </div>
}

export default Loading