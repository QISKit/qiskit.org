import {
  trackClickEvent,
  trackPage,
  trackPerformedSearch,
  AnalyticsContext
} from '~/plugins/segment-analytics'

const window: AnalyticsContext = {
  bluemixAnalytics: {
    trackEvent: jest.fn(),
    pageEvent: jest.fn(),
    trackPerformedSearch: jest.fn()
  },
  digitalData: {
    page: {
      pageInfo: {
        productTitle: 'Test Product Title',
        analytics: {
          category: 'Test Analytics Category'
        }
      }
    }
  }
}

const cta = 'Join now!'
const location = 'header'

const routeName = 'sample route'
const title = 'sample title'

const uiElement = 'sample search component'
const field = 'sample seach term'

const commonSuite: [Function, any[], string][] = [
  [trackPage, [routeName, title], 'pageEvent'],
  [trackClickEvent, [cta, location], 'trackEvent'],
  [trackPerformedSearch, [uiElement, field], 'trackEvent']
]

commonSuite.forEach(([fn, args, delegate]) => {
  describe(`${fn.name}`, () => {
    beforeEach(() => {
      window.bluemixAnalytics[delegate].mockClear()
    })

    it(`delegates in Bluemix Analytics \`${delegate}\` function`, () => {
      fn(window, ...args)
      expect(window.bluemixAnalytics[delegate]).toHaveBeenCalledTimes(1)
    })

    it('fails silently if the context lacks `bluemixAnalytics` object', () => {
      fn(
        {
          ...window,
          bluemixAnalytics: undefined
        },
        ...args
      )
      expect(window.bluemixAnalytics[delegate]).not.toBeCalled()
    })

    it('fails silently if the context lacks `digitalData` object', () => {
      fn(
        {
          ...window,
          digitalData: undefined
        },
        ...args
      )
      expect(window.bluemixAnalytics[delegate]).not.toBeCalled()
    })

    it('throws if `productTitle` is undefined', () => {
      expect(() => fn(
        {
          ...window,
          digitalData: {
            page: {
              pageInfo: {
                analytics: {
                  category: 'Test Analytics Category'
                }
              }
            }
          }
        },
        ...args
      )).toThrow()
    })

    it('throws if `category` is undefined', () => {
      expect(() => fn(
        {
          ...window,
          digitalData: {
            page: {
              pageInfo: {
                productTitle: 'Test Product Title',
                analytics: { }
              }
            }
          }
        },
        ...args
      )).toThrow()
    })

    it('throws if the path to `pageTitle` or `category` is broken', () => {
      expect(() => fn(
        {
          ...window,
          digitalData: {}
        },
        ...args
      )).toThrow()
    })
  })
})

describe('trackClickEvent', () => {
  beforeEach(() => {
    window.bluemixAnalytics.trackEvent.mockClear()
  })

  it('translates the event into a Bluemix Analytics "CTA Clicked" event', () => {
    trackClickEvent(window, cta, location)
    expect(window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(
      'CTA Clicked',
      {
        category: window.digitalData.page.pageInfo.analytics.category,
        CTA: cta,
        location,
        productTitle: window.digitalData.page.pageInfo.productTitle
      }
    )
  })
})

describe('trackPage', () => {
  beforeEach(() => {
    window.bluemixAnalytics.pageEvent.mockClear()
  })

  it('translates the event into a Bluemix Analytics "pushState" page event', () => {
    trackPage(window, routeName, title)
    expect(window.bluemixAnalytics.pageEvent).toHaveBeenCalledWith(
      window.digitalData.page.pageInfo.analytics.category,
      routeName,
      {
        navigationType: 'pushState',
        productTitle: window.digitalData.page.pageInfo.productTitle,
        title
      }
    )
  })
})

describe('trackPerformedSearch', () => {
  beforeEach(() => {
    window.bluemixAnalytics.trackEvent.mockClear()
  })

  it('translates the event into a Bluemix Analytics "Performed Search" event', () => {
    trackPerformedSearch(window, uiElement, field)
    expect(window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(
      'Performed Search',
      {
        productTitle: window.digitalData.page.pageInfo.productTitle,
        category: window.digitalData.page.pageInfo.analytics.category,
        uiElement,
        field
      }
    )
  })
})
