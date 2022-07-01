import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

// // 注册中国地图
import chinaJson from '../data/china.json'
echarts.registerMap('china', chinaJson as any)

export function useEcharts(domEl: HTMLElement, theme = 'light') {
  const echartsInstance = echarts.init(domEl, theme, { renderer: 'svg' })
  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
  return [setOptions]
}
