declare module '*.png'
declare module '*.svg' {
  import React from 'react'
  const svg: React.SFC<React.SVGProps<SVGSVGElement>>
  // const type = import('react')
  export default svg
}
