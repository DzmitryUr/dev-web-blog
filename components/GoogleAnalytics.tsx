import Script from 'next/script'

export const GoogleAnalytics = ({ gaId }) => {
  if (process.env.NODE_ENV !== 'production') return null

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', ${gaId});
        `}
      </Script>
    </>
  )
}
