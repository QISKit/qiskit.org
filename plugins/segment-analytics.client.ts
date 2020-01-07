import Vue from 'vue'

interface AnalyticsContext {
  _analytics?: any
  _analyticsReady?: Promise<Event>
  bluemixAnalytics?: any
  digitalData?: any
}

interface ClickEventParams {
  action: string
}

interface CtaEvent {
  CTA: string
  productTitle: string
  category: string
}

declare global {
  interface Window extends AnalyticsContext {}
}

function configureAnalytics () {
  // See window._analytics default values at:
  // https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
  window._analytics = {
    segment_key: process.env.analyticsKey,
    coremetrics: false,
    optimizely: false,
    googleAddServices: false,
    fullStory: false,
    autoPageEventSpa: false,
    autoFormEvents: false,
    autoPageView: false
  }

  window.digitalData = {
    page: {
      pageInfo: {
        productTitle: 'IBM Q Experience',
        analytics: {
          category: 'Qiskit.org'
        }
      }
    }
  }
}

function installAnalyticsOnce () {
  window._analyticsReady = window._analyticsReady || new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = process.env.analyticsScriptUrl || ''
    document.head.appendChild(script)
    script.onload = resolve
    script.onerror = (err) => {
      console.warn('Error loading Bluemix Analytics script:', err)
      resolve()
    }
  })
}

/**
 * Send a page visitation event to segment.
 * @param pageComponent the page component.
 */
function trackPage (context: AnalyticsContext, routeName: string, title: string) {
  const { bluemixAnalytics, digitalData } = context

  if (!bluemixAnalytics || !digitalData) { return }

  const category = getOrFailCategory(digitalData)
  const productTitle = getOrFailProductTitle(digitalData)

  bluemixAnalytics.pageEvent(category, routeName, {
    navigationType: 'pushState',
    productTitle,
    title
  })
}

function trackClickEvent (context: AnalyticsContext, params: ClickEventParams) {
  const { action } = params
  const { bluemixAnalytics, digitalData } = context

  if (!bluemixAnalytics || !digitalData) { return }

  const productTitle = getOrFailProductTitle(digitalData)
  const category = getOrFailCategory(digitalData)

  const cta: CtaEvent = {
    productTitle,
    category,
    CTA: action
  }

  bluemixAnalytics.trackEvent('CTA Clicked', cta)
}

function getOrFailProductTitle (digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.productTitle,
    '`digitalData.page.pageInfo.productTitle` is missing'
  )
}

function getOrFailCategory (digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.analytics.category,
    '`digitalData.page.pageInfo.analytics.category` is missing'
  )
}

function assertCanGet<T> (getter: () => T, error: string): T {
  let result
  try {
    result = getter()
  } catch (ex) { }
  if (!result) {
    throw new Error(error)
  }
  return result
}

declare module 'vue/types/vue' {
  interface Vue {
    $trackClickEvent(params: ClickEventParams): void
    $trackPage(routeName: string, title: string): void
  }
}

export default (_, inject) => {
  configureAnalytics()
  installAnalyticsOnce()
  inject('trackClickEvent', async (params: ClickEventParams) => {
    await window._analyticsReady
    trackClickEvent(window, params)
  })
  inject('trackPage', async (routeName, title) => {
    await window._analyticsReady
    trackPage(window, routeName, title)
  })
}

export { trackClickEvent, trackPage, ClickEventParams, AnalyticsContext }
